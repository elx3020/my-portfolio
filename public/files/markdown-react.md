# How to read and execute file in node Js



<img class='blog-c' src='/images/blog/cover_readfile_nodejs.jpg' alt='Test'>

Normally files are served to the client via server but there are cases 

## Why do you want to do this?

If your site is not going to be a monster with tons of information or you don't plan to use a CMS. This is a very flexible, scalable and cheap way to have dinamic content on your website.
 

```as
-> (Root) Your Project 
    -> public
        -> files
            -> helloWorld.md
```

We are going to read the content of the file using the fetch API. React uses the useEffect() hook to do async operations.


```js  
import { useEffect, useRef, useState } from 'react';

    const [markDownContent,setMarkDownContent] = useState('');

    const ReadMarkDown = (props: any) {

        useEffect() {


        ,[markDownContent]}

    }

    return (
        <div>
            {marDownContent}
        </div>
    )


export default ReadMarkDown;

```




If you don't know what a async operation means or you haven't work with promises means in the context of web development you can go here:
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises/" target="_blank">Promise in Javascript</a>




This is an import statement
```js  
import React from 'react'
```


This is a function in javascript:
```js  
function foo(){
    let x = 1; 
}
```

Run the code using the following command

```bash
npm run dev
```



