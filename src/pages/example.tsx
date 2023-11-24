import React from "react";

const Example = () => {
  let count = 0;
  const text = "abcbdbbc";
  let str = "";

  for (let i = 0; i < text.length; i++) {
    if (str.includes(text[i]) === false) {
      str += text[i];
    }
    for (let j = 0; j < str.length; j++) {
      const reg = new RegExp(str[j], "gi");
      let x = text.match(reg);
      console.log(x);
      if (x.length > 1) {
        count += 1;
      }
    }

    //   let y = text.match(text[i])
  }

  console.log(count);
  console.log(str);

  return <div>example</div>;
};

export default Example;
