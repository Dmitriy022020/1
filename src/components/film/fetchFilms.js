import React from "react";

export function fetch() {


  const api_key = '&api_key=19e4bdec1949a727168540afcf0d6538'
  const response = await fetch(
    'https://api.themoviedb.org/3/discover/movie?language=ru&page=' + page +
    '&primary_release_year=' + year +
    api_key
  )
//'&sort_by=primary_release_date.asc' +
  const json = await response.json()
}