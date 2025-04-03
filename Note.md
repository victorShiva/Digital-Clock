# Date Article Explore

1. ### Date() ;
   - Return current Date and Time as a String.
   ```js
   const now = Date();
   console.log(now);
   ```
2. ### new Date() ;

   - Return current Date and Time representing Object.

   ```js
   const now = new Date();
   console.log(now);
   ```

   - more options to pass as paraameter and get expected value

   ```js
   new Date();
   new Date(value);
   new Date(dateString);
   new Date(dateObject);

   new Date(year, monthIndex);
   new Date(year, monthIndex, day);
   new Date(year, monthIndex, day, hours);
   new Date(year, monthIndex, day, hours, minutes);
   new Date(year, monthIndex, day, hours, minutes, seconds);
   new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);
   ```

3. ### Date.now();
   - returns the current timeStamp in milliseconds that's representing Number.
   ```js
   const now = Date.now();
   console.log(now);
   ```
   _Note :_ - `Date.now()` is Faster , Direct Number <br>
   &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; `new Date().getTime()` Slower , Create an Object first.

---

# new Date() ;

- `getTime() and valueOf()` methods return timeStamps.

---

### Below Provide live link :

[Digital Clock](https://digital-clock5775.netlify.app/)
