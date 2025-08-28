import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            O Marketplace de Live Shopping do Brasil
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Compre, venda e se conecte em torno das coisas que você ama.
            Descubra uma nova experiência de shopping interativo.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4 md:px-10 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que Fazemos
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Para Vendedores */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#FF6161]/20 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#FF6161]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Para Vendedores</h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Conecte-se com uma comunidade apaixonada, apresente seus
                produtos através de transmissões ao vivo e alcance compradores
                que realmente valorizam o que você tem a oferecer.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FF6161] rounded-full"></div>
                  <span className="text-sm font-medium">
                    Crie experiências de compra envolventes
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FF6161] rounded-full"></div>
                  <span className="text-sm font-medium">
                    Escolha entre leilões dinâmicos ou vendas diretas
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FF6161] rounded-full"></div>
                  <span className="text-sm font-medium">
                    Interaja com compradores em tempo real
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FF6161] rounded-full"></div>
                  <span className="text-sm font-medium">
                    Sistema de pagamentos seguro e integrado <i>(em breve)</i>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FF6161] rounded-full"></div>
                  <span className="text-sm font-medium">
                    Transmissões ao vivo para mostrar seus produtos{" "}
                    <i>(em breve)</i>
                  </span>
                </div>
              </div>
            </div>

            {/* Para Compradores */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#6366f1]/20 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#6366f1]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Para Compradores</h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Explore produtos únicos, participe de experiências de compra
                interativas e faça parte de uma comunidade que compartilha suas
                paixões.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#6366f1] rounded-full"></div>
                  <span className="text-sm font-medium">
                    Descubra produtos únicos e especiais
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#6366f1] rounded-full"></div>
                  <span className="text-sm font-medium">
                    Participe de experiências de compra dinâmicas
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#6366f1] rounded-full"></div>
                  <span className="text-sm font-medium">
                    Acompanhe seus produtos favoritos
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#6366f1] rounded-full"></div>
                  <span className="text-sm font-medium">
                    Notificações inteligentes e personalizadas <i>(em breve)</i>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#6366f1] rounded-full"></div>
                  <span className="text-sm font-medium">
                    Assista transmissões ao vivo dos vendedores{" "}
                    <i>(em breve)</i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como Funciona
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#4d4d4d] rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold">Crie</h3>
              <p className="text-muted-foreground">
                Vendedores cadastram seus produtos, definem preço inicial e
                criam o leilão com fotos e descrições.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#4d4d4d] rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold">Arremate</h3>
              <p className="text-muted-foreground">
                Compradores entram no leilão, dão lances em tempo real e
                competem pelo produto até o tempo acabar.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#4d4d4d] rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold">Ganhe</h3>
              <p className="text-muted-foreground">
                O maior lance vence o leilão. Finalize a compra e receba seu
                produto com segurança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-16 px-4 md:px-10 bg-[#FF6161]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Junte-se à Nossa Lista de Espera
          </h2>

          <div className="max-w-2xl mx-auto space-y-6 mb-8">
            <p className="text-lg text-muted-foreground">
              Seja você um vendedor apaixonado ou um comprador em busca de
              produtos únicos, entre na nossa lista de espera e faça parte da
              revolução do live shopping no Brasil.
            </p>

            <div className="bg-background p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">
                Por que Entrar na Lista de Espera?
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FF6161] rounded-full"></div>
                    <span className="text-sm">
                      Acesso antecipado à plataforma
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FF6161] rounded-full"></div>
                    <span className="text-sm">
                      Benefícios especiais para vendedores
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FF6161] rounded-full"></div>
                    <span className="text-sm">
                      Comunidade ativa de colecionadores
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FF6161] rounded-full"></div>
                    <span className="text-sm">Novidades em primeira mão</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FF6161] rounded-full"></div>
                    <span className="text-sm">
                      Feedback direto para moldar o produto
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FF6161] rounded-full"></div>
                    <span className="text-sm">
                      Acesso a beta de novas funcionalidades
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="/">
            <Button
              size="lg"
              className="cursor-pointer bg-[#4d4d4d] hover:bg-[#606060] text-white"
            >
              Entrar na Lista de Espera
            </Button>
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Criar o marketplace de live shopping mais inovador do Brasil,
            conectando pessoas através de experiências de compra únicas,
            interativas e autênticas.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-10 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para o Futuro do Shopping?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Junte-se à comunidade que está redefinindo a forma como compramos e
            vendemos. Uma experiência social, autêntica e cheia de descobertas
            te espera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                size="lg"
                className="cursor-pointer bg-[#4d4d4d] hover:bg-[#606060] text-white"
              >
                Entrar na Lista de Espera
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
