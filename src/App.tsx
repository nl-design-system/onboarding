import {
  Document,
  Heading,
  CodeBlock,
  Surface,
  UnorderedList,
  UnorderedListItem,
  Link,
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
            <Heading level={2}>Wat ga je bouwen?</Heading>
          </Slide>
          <Slide appearance="title" id="componenten">
            <Heading level={2}>Welke componenten?</Heading>
          </Slide>
          <Slide appearance="title" id="basis-thema">
            <Heading level={2}>Basis thema</Heading>
          </Slide>
          <Slide appearance="title" id="development">
            <Heading level={2}>Bouwen met componenten</Heading>
          </Slide>
          <Slide appearance="title" id="foo">
            <Heading level={2}>FOo</Heading>
          </Slide>
          <Slide appearance="demo" id="installeren">
            <CodeBlock>
              {`npm install --save-dev
@nl-design-system-unstable/voorbeeld-design-tokens`}
            </CodeBlock>
            <CodeBlock>{`npm install --save-dev @utrecht/component-library-react
npm install --save-dev @amsterdam/design-system-react
npm install --save-dev @gemeente-denhaag/components-react`}</CodeBlock>
          </Slide>
          <Slide appearance="title" id="development">
            <Heading level={2}>Bouwen met componenten</Heading>
          </Slide>
          <Slide appearance="title" id="brand">
            <Heading level={2}>Huisstijl</Heading>
          </Slide>
          <Slide appearance="title" id="custom">
            <Heading level={2}>Component aanpassen</Heading>
          </Slide>
          <Slide appearance="title" id="testen">
            <Heading level={2}>Testen</Heading>
          </Slide>
          <Slide appearance="demo" id="kthxbye">
            <Heading level={2}>Bedankt</Heading>
            <UnorderedList>
              <UnorderedListItem>
                Dank aan mijn vrienden voor alles wat ze afgelopen dagen nog op
                de valreep hebben gemaakt!
              </UnorderedListItem>
              <UnorderedListItem>
                Community, bedankt voor al deze mooie componenten !
              </UnorderedListItem>
              <UnorderedListItem>
                Community, bedankt voor de fluid font sizes — deze slides zijn
                daarmee gebouwd!
              </UnorderedListItem>
            </UnorderedList>
          </Slide>
        </Slideshow>
      </Document>
    </Surface>
  );
}

export default App;
