import {
  CodeBlock,
  ColumnLayout,
  Document,
  Figure,
  FigureCaption,
  Heading,
  Image,
  Link,
  OrderedList,
  OrderedListItem,
  Surface,
  UnorderedList,
  UnorderedListItem,
} from "@utrecht/component-library-react/dist/css-module";
import { Paragraph } from "@nl-design-system-candidate/paragraph-react/css";
import { Slide } from "./Slide";
import { Slideshow } from "./Slideshow";
import "@nl-design-system-unstable/nlds-design-tokens/src/font.mjs";
import "./App.css";
import "./theme.css";

function App() {
  return (
    <Surface className="nlds-theme nlds-theme--viewport-scale">
      <Document>
        <Slideshow numbered>
          <Slide id="start">
            <Heading level={1}>
              Aan de slag met
              <br />
              NL Design System
            </Heading>
            <Paragraph>door Robbert Broersma</Paragraph>
            <Paragraph>17 oktober 2024</Paragraph>
            <Paragraph>
              Design System Lead in het{" "}
              <Link
                href="https://nldesignsystem.nl/project/kernteam/"
                external
                target="_new"
              >
                NL Design System kernteam
              </Link>
            </Paragraph>
          </Slide>
          <Slide appearance="title" id="plan">
            <Heading level={2}>Wat gaan we bouwen?</Heading>
            <Figure>
              <Image
                src="figma-stap-2.png"
                alt="Pagina met formulier in Figma"
              />
              <FigureCaption>
                <Link
                  href="https://www.figma.com/design/iZgSIuU8hvH9nw3h7WO1ZY/Overheidsbrede-portalen---Templates?node-id=4528-10642&t=m8GxWnacbePTk9z4-4"
                  target="_new"
                  external
                >
                  Het design in Figma
                </Link>
              </FigureCaption>
            </Figure>
          </Slide>
          <Slide appearance="title" id="plan">
            <Heading level={2}>Welke kennis heb je nodig?</Heading>
            <UnorderedList>
              <UnorderedListItem>
                <Link
                  href="https://nldesignsystem.nl/button/#acceptatiecriteria"
                  external
                  target="_new"
                >
                  Acceptatie-criteria voor componenten
                </Link>
              </UnorderedListItem>
              <UnorderedListItem>
                <Link
                  href="https://nldesignsystem.nl/componenten/"
                  external
                  target="_new"
                >
                  Bestaande componenten
                </Link>
              </UnorderedListItem>
              <UnorderedListItem>
                <Link
                  href="https://nldesignsystem.nl/richtlijnen/formulieren"
                  external
                  target="_new"
                >
                  Richtlijnen voor Formulieren
                </Link>
              </UnorderedListItem>
              <UnorderedListItem>
                <Link
                  href="https://nldesignsystem.nl/richtlijnen/formulieren"
                  external
                  target="_new"
                >
                  Wettelijke eisen, zoals WMEBV
                </Link>
              </UnorderedListItem>
            </UnorderedList>
          </Slide>
          <Slide appearance="title" id="componenten">
            <Heading level={2}>Welke componenten?</Heading>
            <Figure>
              <Image
                src="figma-component-inspect.png"
                alt="Component inspecteren in Figma: de naam utrecht-button is zichtbaar in de sidebar"
              />
              <FigureCaption>
                <Link href="https://www.figma.com/design/iZgSIuU8hvH9nw3h7WO1ZY/Overheidsbrede-portalen---Templates?node-id=4528-10692&t=7BUFijIlNk4BEXLP-4">
                  De button inspecteren in Figma
                </Link>
              </FigureCaption>
            </Figure>
          </Slide>
          <Slide appearance="title" id="plan">
            <Heading level={2}>Inventarisatie van componenten</Heading>
            <ColumnLayout>
              <UnorderedList>
                <UnorderedListItem>
                  <Link
                    href="https://nldesignsystem.nl/action-group/"
                    external
                    target="_new"
                  >
                    Action Group
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    href="https://nldesignsystem.nl/button/"
                    external
                    target="_new"
                  >
                    Button
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    href="https://nldesignsystem.nl/form-field"
                    external
                    target="_new"
                  >
                    Form Field
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    href="https://nldesignsystem.nl/heading/"
                    external
                    target="_new"
                  >
                    Heading
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    href="https://nldesignsystem.nl/heading-group"
                    external
                    target="_new"
                  >
                    Heading Group
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    href="https://nldesignsystem.nl/link"
                    external
                    target="_new"
                  >
                    Link
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    href="https://nldesignsystem.nl/paragraph"
                    external
                    target="_new"
                  >
                    Paragraph
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    href="https://nldesignsystem.nl/pre-heading"
                    external
                    target="_new"
                  >
                    Pre-Heading
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    href="https://nldesignsystem.nl/text-input"
                    external
                    target="_new"
                  >
                    Text Input
                  </Link>
                </UnorderedListItem>
              </UnorderedList>
            </ColumnLayout>
          </Slide>

          <Slide appearance="title" id="plan">
            <Heading level={2}>Implementatie vinden in de Community</Heading>
            <ColumnLayout>
              <Paragraph>Bijgedragen door Amsterdam:</Paragraph>
              <UnorderedList>
                <UnorderedListItem>
                  <Link
                    href="https://designsystem.amsterdam/?path=/docs/components-text-heading--docs"
                    external
                    target="_new"
                  >
                    Heading
                  </Link>
                </UnorderedListItem>
              </UnorderedList>
              <Paragraph>Bijgedragen door Utrecht:</Paragraph>
              <UnorderedList>
                <UnorderedListItem>
                  <Link
                    href="https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-button-group--docs"
                    external
                    target="_new"
                  >
                    Action Group
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    href="https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-button--docs"
                    external
                    target="_new"
                  >
                    Button
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    href="https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-form-field-textbox--docs"
                    external
                    target="_new"
                  >
                    Form Field with Text Input
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    href="https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-heading-group--docs"
                    external
                    target="_new"
                  >
                    Heading Group
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    href="https://nldesignsystem.nl/link"
                    external
                    target="_new"
                  >
                    Link
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    href="https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-paragraph--docs"
                    external
                    target="_new"
                  >
                    Paragraph
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    href="https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-pre-heading--docs"
                    external
                    target="_new"
                  >
                    Pre-Heading
                  </Link>
                </UnorderedListItem>
              </UnorderedList>
            </ColumnLayout>
          </Slide>
          <Slide appearance="demo" id="installeren">
            <Heading level={2}>Component Libraries installeren</Heading>
            <Paragraph>npm packages installeren:</Paragraph>
            <CodeBlock>{`npm install --save-dev @amsterdam/design-system-react
npm install --save-dev @utrecht/component-library-react`}</CodeBlock>
            <Paragraph>Componenten importeren in React:</Paragraph>
            <CodeBlock>{`import { Heading } from '@amsterdam/design-system-react';
import {
  Button,
  ButtonGroup as ActionGroup,
  FormFieldTextbox as FormFieldTextInput,
  HeadingGroup,
  Link,
  Paragraph,
  PreHeading
} from '@utrecht/component-library-react/dist/css-module';
`}</CodeBlock>
          </Slide>
          <Slide appearance="title" id="basis-thema">
            <Heading level={2}>Voorbeeld thema installeren</Heading>
            <Paragraph>npm package installeren:</Paragraph>
            <CodeBlock>
              {`npm install --save-dev @nl-design-system-unstable/voorbeeld-design-tokens`}
            </CodeBlock>
            <Paragraph>Importeren in React:</Paragraph>
            <CodeBlock>
              {`import "@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css";`}
            </CodeBlock>
            <Paragraph>Toepassen op HTML:</Paragraph>
            <CodeBlock>{`<html className="voorbeeld-theme">`}</CodeBlock>
          </Slide>
          <Slide appearance="title" id="development">
            <Heading level={2}>Bouwen met componenten</Heading>
            <Paragraph>Live coden, als dat maar goed gaat!</Paragraph>
            <OrderedList>
              <OrderedListItem>Project starten met Vite</OrderedListItem>
              <OrderedListItem>Installeren van dependencies</OrderedListItem>
              <OrderedListItem>
                Imports voor componenten toevoegen
              </OrderedListItem>
              <OrderedListItem>Voorbeeld thema toevoegen</OrderedListItem>
              <OrderedListItem>Formulier maken</OrderedListItem>
              <OrderedListItem>Component aanpassen</OrderedListItem>
              <OrderedListItem>
                Refactoring: lokale component library
              </OrderedListItem>
              <OrderedListItem>Verrassing! 🎉</OrderedListItem>
            </OrderedList>
          </Slide>
          <Slide appearance="title" id="testen">
            <Heading level={2}>Testen</Heading>
            <UnorderedList>
              <UnorderedListItem>Grote en kleine schermen</UnorderedListItem>
              <UnorderedListItem>
                Voorkeuren van de gebruiker:
                <UnorderedList>
                  <UnorderedListItem>forced-colors mode</UnorderedListItem>
                  <UnorderedListItem>vertalingen</UnorderedListItem>
                </UnorderedList>
              </UnorderedListItem>
              <UnorderedListItem>Toetsenbord</UnorderedListItem>
            </UnorderedList>
            <Paragraph>
              <Link href="http://polypane.app" external target="_blank">
                Polypane
              </Link>{" "}
              is hier super-handig voor!
            </Paragraph>
            <Paragraph>
              <Link
                href="polypane-workspace.ppws"
                external
                download="polypane-workspace.ppws"
              >
                Download mijn Polypane instellingen
              </Link>{" "}
              om zelf te testen.
            </Paragraph>
          </Slide>
          <Slide appearance="title" id="testen">
            <Heading level={2}>Migratie van bestaande code</Heading>
            <Paragraph>
              <Link
                href="https://gitlab.com/commonground/huishoudboekje/app-new"
                target="_new"
                external
              >
                Huishoudboekje op GitLab
              </Link>
              <CodeBlock>
                git clone git@gitlab.com:commonground/huishoudboekje/app-new.git
              </CodeBlock>
              <CodeBlock>cd app-new</CodeBlock>
              <CodeBlock>( cd mesh && bash copy-protos.sh )</CodeBlock>
              <CodeBlock>docker compose up</CodeBlock>
            </Paragraph>
          </Slide>
          <Slide appearance="demo" id="kthxbye">
            <Heading level={2}>Dank aan de Community!</Heading>
            <UnorderedList>
              <UnorderedListItem>
                Bedankt voor al deze mooie componenten!
              </UnorderedListItem>
              <UnorderedListItem>
                Bedankt voor de handige templates!
              </UnorderedListItem>
              <UnorderedListItem>
                Bedankt voor de fluid font sizes — deze slides zijn daarmee
                gebouwd!
              </UnorderedListItem>
            </UnorderedList>
          </Slide>
        </Slideshow>
      </Document>
    </Surface>
  );
}

export default App;
