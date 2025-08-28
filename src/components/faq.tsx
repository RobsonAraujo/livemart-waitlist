"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      <div className="flex flex-col items-center justify-center gap-2 max-w-md">
        <h2 className="sm:text-3xl text-2xl font-semibold text-foreground">
          Perguntas Frequentes
        </h2>
        <p className="sm:text-base text-sm text-muted-foreground text-center">
          Tudo que você precisa saber sobre o LiveMart, o marketplace de live
          shopping do Brasil.
        </p>
      </div>
      <div className="w-full max-w-lg">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-4"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline">
              O que é o LiveMart?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              O LiveMart é o marketplace de live shopping do Brasil, onde você
              compra, vende e se conecta em torno das coisas que ama. Focamos
              inicialmente em cartas Pokémon, oferecendo uma experiência
              interativa com leilões dinâmicos, transmissões ao vivo e uma
              comunidade apaixonada por colecionáveis.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline">
              Como funciona a experiência de compra?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Nossa plataforma vai oferecer múltiplas formas de compra: leilões
              dinâmicos em tempo real, vendas diretas e transmissões ao vivo
              onde vendedores apresentam seus produtos. Tudo acontece de forma
              transparente e interativa, criando uma experiência única de
              shopping social.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline">
              Quais são os benefícios de entrar na lista de espera?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Membros da lista de espera terão acesso antecipado ao marketplace,
              benefícios exclusivos, acesso prioritário às transmissões ao vivo,
              entrada na comunidade de colecionadores e oportunidade de
              influenciar as funcionalidades da plataforma.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline">
              Como funciona o sistema de pagamentos?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Começamos com leilões baseados em fotos e negociações diretas. Em
              seguida, implementaremos transmissões ao vivo, sistema de
              pagamentos integrado e funcionalidades sociais avançadas,
              evoluindo para o marketplace de live shopping mais completo do
              Brasil.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="hover:no-underline">
              Posso vender outros produtos além de cartas Pokémon?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Começamos com cartas Pokémon para construir uma comunidade forte e
              especializada. Nossa visão é expandir para outros colecionáveis,
              produtos únicos, mantendo sempre a qualidade e o aspecto social da
              experiência.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
