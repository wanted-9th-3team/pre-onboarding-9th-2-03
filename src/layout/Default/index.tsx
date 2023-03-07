import {ReactNode} from "react";
import {Container} from "@chakra-ui/react";
import Header from "../../modules/Header";
import Footer from "../../modules/Footer";

type Props = {
    children: string | ReactNode;
    pageName: string;
};

export function Default({children, pageName}: Props) {
    return (
        <>
            <Header/>
            <Container maxW="container.lg" p={3} marginTop={10} as="main" minH="70vh">
                {children}
            </Container>
            <Footer/>
        </>
    )
}