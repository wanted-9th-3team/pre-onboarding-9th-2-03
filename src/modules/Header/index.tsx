import {Box, Container, Flex, HStack} from "@chakra-ui/react";
import Logo from "../Logo";
import ColorModeButton from "../ColorModeButton";

function Header() {
    return (
        <Box borderBottom="1px" borderBottomColor="chakra-border-color">
            <Container maxW="container.xl" p={'10px'}>
                <Flex align="center" justify="space-between">
                    <Logo/>
                    <HStack gap={'10px'}>
                        <ColorModeButton/>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    )
}

export default Header