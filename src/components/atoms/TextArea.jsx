import styled from "@emotion/styled";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/material";

export const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
      box-sizing: border-box;
      width: 320px;
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 8px 12px;
      border-radius: 8px;
      border-color: var(--primary-color);
      box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
      // firefox
      &:focus-visible {
        outline: 0;
      }
    `
);
