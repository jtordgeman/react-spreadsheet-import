import { Box, extendTheme } from "@chakra-ui/react"
import { colorSchemeOverrides, themeOverrides } from "../../../theme"
import { headerSelectionTableFields, mockRsiValues } from "../../../stories/mockRsiValues"
import { SelectHeaderStep } from "../SelectHeaderStep"
import { Providers } from "../../../components/Providers"
export default {
  title: "Select Header Step",
  parameters: {
    layout: "fullscreen",
  },
}

const theme = extendTheme(colorSchemeOverrides, themeOverrides)

export const Basic = () => (
  <Providers theme={theme} rsiValues={mockRsiValues}>
    <Box display="flex" flexDirection="column" flex={1} height="100vh" id="chakra-modal-rsi">
      <SelectHeaderStep data={headerSelectionTableFields} onContinue={() => {}} />
    </Box>
  </Providers>
)
