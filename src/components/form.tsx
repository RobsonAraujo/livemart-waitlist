"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import confetti from "canvas-confetti";

interface FormProps {
  onSuccessChange?: (success: boolean) => void;
}

export default function WaitlistForm({ onSuccessChange }: FormProps) {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      if (!formData.email || !isValidEmail(formData.email)) {
        toast.error("Por favor, insira um email válido");
        return;
      }

      setStep(2);
      return;
    }

    try {
      setLoading(true);

      const promise = new Promise((resolve, reject) => {
        const { name, email } = formData;

        fetch("/api/mail", {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstname: name, email }),
        })
          .then((mailResponse) => {
            if (!mailResponse.ok) {
              if (mailResponse.status === 429) {
                reject("Rate limited");
              } else {
                reject("Email sending failed");
              }
              return null;
            }

            return fetch("/api/notion", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email }),
            });
          })
          .then((notionResponse) => {
            if (!notionResponse) return;

            if (!notionResponse.ok) {
              if (notionResponse.status === 429) {
                reject("Rate limited");
              } else {
                reject("Notion insertion failed");
              }
            } else {
              resolve({ name });
            }
          })
          .catch((error) => {
            reject(error);
          });
      });

      toast.promise(promise, {
        loading: "Adicionando você à lista de espera... 🚀",
        success: (data) => {
          setFormData({ email: "", name: "" });
          setSuccess(true);
          onSuccessChange?.(true);
          setTimeout(() => {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
              colors: [
                "#49be78",
                "#FF4444",
                "#FFD700",
                "#FF6B35",
                "#4ECDC4",
                "#45B7D1",
              ],
            });
          }, 100);
          return "Obrigado por se juntar à lista de espera! 🎉";
        },
        error: (error) => {
          if (error === "Rate limited") {
            return "Muitas tentativas. Tente novamente mais tarde";
          }
          if (error === "Email sending failed") {
            return "Falha ao enviar email. Tente novamente 😢.";
          }
          if (error === "Notion insertion failed") {
            return "Falha ao salvar seus dados. Tente novamente 😢.";
          }
          return "Ocorreu um erro. Tente novamente 😢.";
        },
      });

      promise.finally(() => {
        setLoading(false);
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
      alert("Algo deu errado. Tente novamente.");
    }
  };

  const resetForm = () => {
    setStep(1);
    setFormData({ email: "", name: "" });
    setSuccess(false);
    onSuccessChange?.(false);
  };

  return (
    <div className="w-full relative">
      {success ? (
        <motion.div
          className="p-6 flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={resetForm}
            className="bg-[#49be78] text-white px-6 py-2 rounded-[12] font-semibold hover:bg-opacity-90 transition-all"
            type="button"
          >
            Entrar com outro email
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="relative">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="email-step"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex relative"
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="flex-grow bg-background border border-border text-foreground px-4 py-3 rounded-[12]  focus:outline-1 transition-all duration-300 focus:outline-offset-4 focus:outline-[#49be78]"
                  disabled={loading}
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 font-semibold top-0 bottom-0 bg-[#49be78] flex justify-center items-center cursor-pointer text-white px-5 py-2 m-2 rounded-[12] hover:bg-opacity-90 transition-all disabled:opacity-50"
                  disabled={loading}
                >
                  Continuar
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="name-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nome"
                    className="flex-grow bg-background border border-border text-foreground px-4 py-3 rounded-[12]  focus:outline-1 transition-all duration-300 focus:outline-offset-4 focus:outline-[#49be78]"
                    disabled={loading}
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-0 font-semibold top-0 bottom-0 bg-[#49be78] flex justify-center items-center cursor-pointer text-white px-5 py-2 m-2 rounded-[12] hover:bg-opacity-90 transition-all disabled:opacity-50"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <title>Loading spinner</title>
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Entrando...
                      </span>
                    ) : (
                      <span>Entrar na lista</span>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      )}
    </div>
  );
}
