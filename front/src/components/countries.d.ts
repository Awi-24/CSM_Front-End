declare module 'countries-list' {
    type TCountries = { [code: string]: { name: string } };
  
    const countries: {
      countries: TCountries;
    };
  
    export = countries;
  }
  