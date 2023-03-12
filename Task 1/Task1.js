const XMLString =
`<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`
    
    const parser = new DOMParser();
    const xmlDOM = parser.parseFromString(XMLString, 'text/xml');

    const listNode = xmlDOM.querySelector('list')
    const studentNodes = listNode.querySelectorAll("student");

    const result = new Array();
    studentNodes.forEach(studentNode => {
        const nameNode = studentNode.querySelector("name");
        const langAttr = nameNode.getAttribute('lang');
        const firstNode = studentNode.querySelector("first");
        const secondNode = studentNode.querySelector("second");
        const ageNode = studentNode.querySelector("age");
        const profNode = studentNode.querySelector("prof");
      
        result.push({
            prof: profNode.textContent,
            name: `${firstNode.textContent} ${secondNode.textContent}`,
            lang: langAttr,
            age: Number(ageNode.textContent),
        });
    });

    console.log(result);