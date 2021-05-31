import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';



class AccordionDemo extends Component {

    render() {
        return (
            <Accordion>
                <AccordionItem className="accordion__item mb-2" expanded >
                    <AccordionItemTitle className="border mb-0 bg-transparent card-header">
                        <h6 className="mb-0">
                            <a className="text-dark" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true">When our power of choice Bootsland ?</a>
                        </h6>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <div className="text-muted">Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered Many desktop publishing packages and web page editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</div>
                    </AccordionItemBody>
                </AccordionItem>

                <AccordionItem className="accordion__item mb-2">
                    <AccordionItemTitle className="border mb-0 bg-transparent card-header">
                        <h6 className="mb-0">
                            <a className="text-dark" data-toggle="collapse" data-parent="#accordion" href="#collapse2">Nam libero tempore, cum soluta nobis ?</a>
                        </h6>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <div className="text-muted">Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered Many desktop publishing packages and web page editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</div>
                    </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemTitle className="border mb-0 bg-transparent card-header">
                        <h6 className="mb-0">
                            <a className="text-dark" data-toggle="collapse" data-parent="#accordion" href="#collapse3">which is the same as saying through ?</a>
                        </h6>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <div className="text-muted">Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered Many desktop publishing packages and web page editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</div>
                    </AccordionItemBody>
                </AccordionItem>
            </Accordion>
        );
    }
}

export default AccordionDemo;