- [overview](#overview)
- [thigs i learned](#things-i-learned)
- [conclusions](#conclusions)

# overview

random exercise to practice recreating a design (loosely) and working with react.

the original design that served for inspiration is [this](https://i.pinimg.com/control2/736x/9f/94/ea/9f94ea2cb0ba6251110544e44135d7b1.jpg).

# things i learned 

- you can link the css file either in the html like you normally would, or import it in the App.jsx files. either ways work the same.


- to use states you can either import them like this:

``` 
import { useState } from 'react' ;

const [variable, setVariable] = useState('value')
```

or like this:

```
const [variable, setVariable] = React.useState('value')
```

- images should be in the public folder so that it works without giving me a headache once i deploy. to link to images the path does not need to include 'public/' (ex: import closeMenu from '/images/close-menu.png')

# conclusions

i used states!! i used props! everything worked! it didnt take three hundred years! thank you deity of lost causes and improbable miracles!