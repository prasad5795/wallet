import { Box, color } from '@stacks/ui';

import { Text } from '@app/components/typography';

interface SecretKeyWordProps {
  word: string;
}
export function SecretKeyWord(props: SecretKeyWordProps) {
  const { word } = props;

  return (
    <Box border="1px solid" borderColor={color('border')} borderRadius="8px" p="tight">
      <Text>{word}</Text>
    </Box>
  );
}