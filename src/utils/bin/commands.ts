// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import allCommands from '../../components/commands/allCommands';
import aboutInfo from '../../components/commands/about';
import myskills from '../../components/commands/skill';
import myeducation from '../../components/commands/education';
import cv from '../../assets/cv.png'

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    c += "██░ " + Object.keys(bin).sort()[i - 1] + '\n';
  }
  return allCommands(c);
  };

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return `

  Opened repo
  
  `;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return aboutInfo();
};

// skill 
export const skills = async (args: string[]) : Promise<string> =>{
  return myskills();
}
export const resume = async (args: string[]): Promise<string> => {
  return `
    <div style="margin-left: 2em;">
    <a href=${cv.src} download  >
        <img src=${cv.src} alt="cv" width="190px" style=" border: 3px solid green" />
    </a>
✒ Click on image to download
    </div> 
    
  `;
};

// education
export const education = async (args : string[]) : Promise<string> =>{
  return myeducation();
}

// Banner
export const banner = (args?: string[]): string => {
  return `
  <div class="banner" ><p class="bannername">
    ███████╗██████╗ ███████╗ █████╗ ███╗   ██╗    ██████╗  ██████╗ ███╗   ██╗██╗     ███████╗██╗   ██╗
    ██╔════╝██╔══██╗██╔════╝██╔══██╗████╗  ██║    ██╔══██╗██╔═══██╗████╗  ██║██║     ██╔════╝██║   ██║
    ███████╗██████╔╝█████╗  ███████║██╔██╗ ██║    ██████╔╝██║   ██║██╔██╗ ██║██║     █████╗  ██║   ██║
    ╚════██║██╔══██╗██╔══╝  ██╔══██║██║╚██╗██║    ██╔═══╝ ██║   ██║██║╚██╗██║██║     ██╔══╝  ██║   ██║
    ███████║██║  ██║███████╗██║  ██║██║ ╚████║    ██║     ╚██████╔╝██║ ╚████║███████╗███████╗╚██████╔╝
    ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚══════╝ ╚═════╝ 
    </p><p class="bannertext">
    Type 'help' to see the list of available commands.
    Type 'abstract' to display summary.</p></div>
  `;
};
