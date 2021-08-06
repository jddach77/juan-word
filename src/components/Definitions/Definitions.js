import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Paper,
  Typography,
} from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Definitions.css";

const Definitions = ({ word, category, meanings }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
    typography: {
      fontFamily: ["Montserrat"],
    },
  });

  return (
    <div className="meanings">
      {word === "" ? (
        <Typography variant="h5">
          Type in the box to search for a word
        </Typography>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <ThemeProvider theme={darkTheme}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5">{def.definition}</Typography>
                    <Typography variant="caption">
                      ({item.partOfSpeech})
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="synonyms" variant="subtitle1">
                      {def.synonyms && (
                        <span>
                          <b>Synonyms: </b>
                          {def.synonyms.map((s) => `${s}, `)}
                        </span>
                      )}
                    </Typography>
                    <Typography className="example" variant="subtitle1">
                      {def.example && (
                        <span>
                          <b>Example: </b>
                          {def.example}
                        </span>
                      )}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </ThemeProvider>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
