/**
Check if a string is email like.

Note: You shouldn't use this for validating emails. Only for hinting to the user.

@param string - The string to check.
@returns Whether the string is email like.

@example
```
import isEmailLike from 'is-email-like';

isEmailLike('sindresorhus@gmail.com');
//=> true
```
*/
export default function isEmailLike(string: string): boolean;
