async function Location(city) {
    let url = await fetch('https://geocode.xyz/'+city+'?json=1')
    //Replaced Seattle with generic city from given url
   let response = await url.json();
   console.log(response);
    //
    let latitude = response.latt;
    //Gives latitude
    let longitude = response.longt;
    //Gives longitude
    console.log(city+ " latitude"+":  "+ latitude+ " ;  "+ city+" longitude"+ ": " + longitude);
    console.log(data);
  }
  Location("Seattle");