export default (list:string)=>{
    return `
    <div class="commands"><p class="commandsname">
    ╔═╗╦  ╦    ╔═╗╔═╗╔╦╗╔╦╗╔═╗╔╗╔╔╦╗╔═╗
    ╠═╣║  ║    ║  ║ ║║║║║║║╠═╣║║║ ║║╚═╗
    ╩ ╩╩═╝╩═╝  ╚═╝╚═╝╩ ╩╩ ╩╩ ╩╝╚╝═╩╝╚═╝</p><p class="commandslist">
${list}</p><p class="commandtext">

    [tab]: trigger completion.
    [ctrl+l]/clear: clear terminal.\n
    Type 'abstract' to display summary.</p></div>
    `;
}