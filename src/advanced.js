const skills = new Set(['Ahmed', 'Angular', 'Javascript']);

let nodes = document.createElement('ul');
for (const sk of skills){
    const node = document.createElement('li');
    node.textContent = sk;
    nodes.append(node);
}

export default nodes;