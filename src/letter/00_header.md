---
filetitle: "example_letter"
author:
- Davide Bortolami
- Fermium LABS srl
template: letter
 
opening: To whom it may concern,
closing: Best regards,

#Automatic english date, today
date:  \textbf{\today}

#Receiving address
address: 
- 123 Street Rd
- Chicago, IL

#Your address
return-address: 
- "**Fermium LABS srl**"
- Via Monselice 15a
- 35142 Padova PD
- Italy
ps: 
#- "Please note that ..."

#light background image
background: true 

#Watermarking
#watermark: "Confidential"
watermark-color: ff8888  

# signature: template/signature.pdf

#Technical stuff
signature-before: -10ex
signature-after: -3ex
closing-indentation: 0pt

mainfont: Roboto
---
