import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Container } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { HiPlus  } from 'react-icons/hi2'

import cls from './style.module.scss'
import faqsdb from './FaqsDb'
import Button from '../Button/Button'
const Faqs = () => {
  return (
    <section className={cls.faqs}>
      <Container maxW="1312px">
        <div className={cls.faqHead}>
          <h3 className={cls.title}>Частые вопросы</h3>
        </div>
        <div className={cls.body}>
          <Accordion mb={'54px'} defaultIndex={[0]}>
            {faqsdb.map((faq) => {
              return(
                <AccordionItem key={faq.id}>
                  {({isExpanded}) => (
                    <>
                      <h2 className={cls.question}>
                        <AccordionButton p="30px 0" className={cls.button}>
                          <Box color={isExpanded?'#445371':'#A1A9B8'} as="span" flex='1' textAlign='left'>
                            {faq.question}
                          </Box>
                          <Icon as={HiPlus} color={"#445371"} className={isExpanded ? cls.close : cls.open} m={"8px"} h={"24px"} w={"24px"}/>
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4} className={cls.answer}>
                        {faq.answer}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              )
            })}
          </Accordion>
          <Button label={'Задать свой вопрос'} size={'bg'}/>
        </div>
      </Container>
    </section>
  )
}

export default Faqs