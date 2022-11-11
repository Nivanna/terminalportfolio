import config from '../../../config.json';

const abstract = async (args: string[]): Promise<string> => {
    return `
  <div class="abstract"><div class="abstractlogo">
      ▀▀▀▀▀▀▀▀▀                                  
    (▀▀▀▀▀▀▀▀▀▀▀▀▀                               
   ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀   ▀▀                         
   ▀▀▀▀   ▀▀     ▀  #▀▀▀▀▀        (▀             
   ▀▀▀▀▀/         ▀▀▀▀▀▀▀  ,▀▀▀▀▀ ▀              
    .▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀                    
       &▀▀▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀                        
       ▀▀▀▀▀▀▀▀▀▀▀# ▀▀▀▀▀▀▀                           
       ▀▀▀▀▀▀▀▀▀    ▀▀▀▀▀                              
      ▀▀▀▀▀    &▀▀▀, ▀▀                          
      ▀▀▀▀    ▀▀▀▀▀▀                           
        ▀▀▀▀   ▀▀▀▀▀.                            
              ▀▀▀▀▀*                                  
             ▀▀▀▀▀▀                                   
             ▀....▀                                    
  ▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓               
  ▐▓                                 ▐▓
  ▐▓        > Born Code Die          ▐▓        
  ▐▓                                 ▐▓          
  ▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓</div>
  <div class="abstractdescription">
  ██░ ABSTRACT
  -----------

  ██░ About
  -----------

   Name: ${config.name}
   DOB : 05 Sep 1999
   <u><a href="${config.resume_url}" target="_blank">resume</a></u>
  爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
   <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>

  ██░ Contact
  -----------
  
   <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
   Tel: 0965864399</div>
  </div>
  `;
};

export default abstract;
