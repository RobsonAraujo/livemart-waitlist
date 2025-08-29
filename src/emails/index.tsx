import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

const WaitlistEmail = ({ userFirstname }: { userFirstname: string }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Html>
      <Tailwind>
        <Head>
          <title>Bem-vindo ao LiveMart</title>
          <Preview>
            Obrigado por se juntar à nossa lista de espera! Vamos te manter
            atualizado sobre nosso progresso.
          </Preview>
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;700&display=swap');
            `}
          </style>
        </Head>
        <Body
          className="bg-gradient-to-br from-gray-50 to-gray-100 py-[40px]"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          <Container className="bg-white rounded-[20px] mx-auto p-[40px] max-w-[600px] shadow-2xl border border-gray-200">
            {/* Header with decorative elements */}
            <Section className="text-center mb-[32px] bg-gradient-to-br from-[#FF6161]/20 to-[#FF6161]/20 rounded-[20px] p-[32px]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6161] to-[#FF6161] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🔨</span>
              </div>
              <Text className="text-[32px] font-bold text-gray-900 m-0">
                Bem-vindo ao <span className="text-[#FF6161]">LiveMart</span>
              </Text>
              <Text className="text-[18px] text-gray-600 mt-[16px] mb-[16px]">
                Estamos muito felizes em ter você na nossa lista de espera
              </Text>
              <div className="w-20 h-1 bg-gradient-to-r from-[#FF6161] to-[#FF6161] mx-auto rounded-full"></div>
            </Section>

            {/* Main content */}
            <Section className="bg-gradient-to-br from-gray-50 to-white rounded-[16px] p-[32px] mb-[32px]">
              <Text className="text-[18px] leading-[28px] text-gray-900 mt-0 mb-[24px] font-semibold">
                Olá {userFirstname},
              </Text>

              <Text className="text-[16px] leading-[26px] text-gray-700 mb-[20px]">
                Obrigado por se juntar à lista de espera do LiveMart, nossa
                plataforma inovadora de leilões online focada em cartas Pokémon
                e produtos colecionáveis!
              </Text>

              <Text className="text-[16px] leading-[26px] text-gray-700 mb-[20px]">
                Estamos construindo algo especial para revolucionar a forma como
                as pessoas compram e vendem no Brasil. Nossa missão é criar um
                marketplace interativo onde você pode anunciar seus produtos,
                participar de leilões em tempo real e, em breve, assistir lives
                dos vendedores.
              </Text>

              <Text className="text-[16px] leading-[26px] text-gray-700 mb-[24px]">
                Como membro da lista de espera, você terá acesso antecipado e
                benefícios exclusivos. Tem dúvidas ou ideias? É só responder
                este email, adoraríamos ouvir você.
              </Text>

              {/* Benefits highlight box */}
              <div className="bg-white rounded-[12px] p-[24px] border border-gray-200 mb-[24px]">
                <Text className="text-[16px] font-semibold text-gray-900 mb-[16px] text-center">
                  ✨ Seus Benefícios Exclusivos
                </Text>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FF6161] rounded-full"></div>
                    <span className="text-gray-700">
                      <strong>Entre primeiro</strong>: acesso antecipado à
                      plataforma
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FF6161] rounded-full"></div>
                    <span className="text-gray-700">
                      <strong>Exclusividade</strong>: benefícios especiais para
                      vendedores
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FF6161] rounded-full"></div>
                    <span className="text-gray-700">
                      <strong>Conexões reais</strong>: comunidade ativa de
                      colecionadores
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FF6161] rounded-full"></div>
                    <span className="text-gray-700">
                      <strong>Sempre à frente</strong>: novidades em primeira
                      mão
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FF6161] rounded-full"></div>
                    <span className="text-gray-700">
                      <strong>Sua voz importa</strong>: feedback direto para
                      moldar o produto
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FF6161] rounded-full"></div>
                    <span className="text-gray-700">
                      <strong>Beta exclusivo</strong>: acesso a beta de novas
                      funcionalidades
                    </span>
                  </div>
                </div>
              </div>
            </Section>

            {/* Inspirational section */}
            <Section className="text-center mb-[32px]">
              <div className="bg-gradient-to-r from-[#FF6161]/10 to-[#FF6161]/10 rounded-[16px] p-[24px]">
                <Text className="text-[24px] mb-[16px]">🔨 ✨ 🎴</Text>
                <Text className="text-[16px] text-gray-600 italic mb-[8px]">
                  "O futuro do comércio é interativo e divertido."
                </Text>
                <Text className="text-[14px] text-gray-500">
                  Vamos construir algo incrível juntos!
                </Text>
              </div>
            </Section>

            <Text className="text-[16px] leading-[26px] text-gray-700 mb-[24px] text-center">
              Quer ficar conectado? Siga-nos para atualizações sobre o
              desenvolvimento da plataforma e prévias das funcionalidades.
            </Text>

            {/* Signature */}
            <Section className="border-t border-gray-200 pt-[24px]">
              <Text className="text-[16px] leading-[26px] text-gray-700 mb-[8px]">
                Abraços,
              </Text>
              <Text className="text-[18px] font-bold text-gray-900 mb-[4px]">
                Equipe LiveMart
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[16px]">
                LiveMart Team
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[32px]">
                <Link
                  href="https://livemart.com.br"
                  className="text-blue-600 underline"
                >
                  Site da LiveMart
                </Link>
              </Text>
            </Section>

            {/* Footer */}
            <Hr className="border-gray-200 my-[24px]" />

            <Section>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                © {currentYear} LiveMart. Todos os direitos reservados.
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                Revolucionando o comércio online no Brasil
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WaitlistEmail;
