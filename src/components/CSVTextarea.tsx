import * as React from 'react';

const { memo } = React;

const textareaPlaceholder = `Paste CSV content here. For example:
month,number
June,10
July,30
August,20
`;

type CSVTextareaProps = {
  error: string | undefined,
  handleDataChange: (csv: string) => void,
};

export const CSVTextarea = memo(({ error, handleDataChange }: CSVTextareaProps) => {
  const onTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleDataChange(event.target.value);
  };

  console.log('CSVTextarea');
  return (
    <div>
      <div className="settingsPanel__error error">
        {
          error || ''
        }
      </div>
      <textarea
        className="settingsPanel__textarea"
        placeholder={textareaPlaceholder}
        name="csv"
        id="csv"
        cols={30}
        rows={6}
        onChange={onTextareaChange}
      ></textarea>
      <div className="settingsPanel__info info">
        <span>To save data from your spreadsheet as CSV:&nbsp;</span>
        <span>File → Save As (or Download) → CSV (Comma Delimited)</span>
      </div>
    </div>
  );
});
