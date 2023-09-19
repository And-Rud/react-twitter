import "./index.css";
import Grid from "../grid";
import { memo, useContext } from "react";
import { THEME_TYPE, ThemeContext } from "../../App";

function Component({ username, date, text }) {
  const theme = useContext(ThemeContext);
  return (
    <Grid>
      <div className="post-content">
        <span
          className="post-content__username"
          style={{ color: theme.value === THEME_TYPE.DARK && "white" }}
        >
          @{username}
        </span>
        <span
          className="post-content__date"
          style={{ color: theme.value === THEME_TYPE.DARK && "white" }}
        >
          {date}
        </span>
      </div>
      <p
        className="post-content__text"
        style={{ color: theme.value === THEME_TYPE.DARK && "white" }}
      >
        {text}
      </p>
    </Grid>
  );
}

export default memo(Component);
