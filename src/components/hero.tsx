"use client";

import { useMemo, useState } from "react";

import Countdown from "./countdown";
import People from "./people";
import { Logo } from "./svgs";
import Form from "./form";

export default function Hero({ waitlistPeople }: { waitlistPeople: number }) {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center gap-6 mb-6">
        <Logo className="w-16 h-16" />
        <div className="flex items-center gap-4 rounded-full border border-border px-4 py-1 relative">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6161] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6161]" />
          </span>
          <p className="uppercase text-sm font-medium">Lançamento em {year}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 max-w-2xl">
        <h2 className="text-4xl text-center font-bold text-foreground">
          {isSuccess
            ? "Você está na lista de espera!"
            : "Junte-se à lista de espera"}
        </h2>
        <p className="text-base text-muted-foreground text-center max-w-md">
          {isSuccess
            ? "Você garantiu sua vaga com sucesso! Vamos te notificar assim que a plataforma for lançada e você poderá começar a comprar, vender e se conectar com uma comunidade apaixonada."
            : "O marketplace de live shopping do Brasil. Compre, venda e se conecte em torno das coisas que você ama. Descubra cartas Pokémon raras, participe de transmissões ao vivo e faça parte de uma nova experiência de compra."}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-full max-w-md">
        <Form onSuccessChange={setIsSuccess} />
      </div>
      <div className="flex items-center justify-center gap-2">
        <People count={waitlistPeople} />
      </div>
      <Countdown period={new Date("2025-12-31")} />
    </div>
  );
}
