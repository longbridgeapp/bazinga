import Editor, { EditorRef } from "../components/editor";
import Row from "../components/row";
import ToolPage from "../utils/ToolPage";
// @ts-expect-error
import md5 from 'md5';
import useEditorValue from "../utils/useEditorValue";
import ButtonGroup from "../components/button-group";
import Button from "../components/button";
import { useRef } from "react";

const MD5Page: ToolPage = () => {
  const ref = useRef<EditorRef | null>(null);
  const [result, setResult] = useEditorValue("");

  return (
    <>
      <Row>
        <Editor
          sizeAutoSaveId="input"
          hideLineNumbers
          ref={ref}
          autoFocus
          placeholder="Content to md5"
        />
      </Row>
      <ButtonGroup>
        <Button
          variant="primary"
          onClick={() => {
            const content = ref.current;
            if (content && content.getValue().trim()) {
              let value = content.getValue().trim()
              setResult(md5(value))
            }
         }}
        >
          Generate
        </Button>
      </ButtonGroup>
      {result.value && (
        <Row title="Result">
          <Editor
            sizeAutoSaveId="output"
            hideLineNumbers
            editable={false}
            value={result}
          />
        </Row>
      )}
    </>
  );
};

export default MD5Page;
