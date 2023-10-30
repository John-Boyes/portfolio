import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import importsUs from "./data/imports-us";

const url = 'https://johnboyes.dev/posts/wp-json/wp/v2/posts/?_fields[]=id&_fields[]=slug&_fields[]=title&_fields[]=content&_fields[]=modified&per_page=100&order_by=id&order=asc'

const states = importsUs

export async function getContacts(url, data = {importsUs}) {
  const states = importsUs
  // console.log(states)
  // // Default options are marked with *
  // const contacts = await fetch(url, {
  //   method: "POST", // *GET, POST, PUT, DELETE, etc.
  //   mode: "cors", // no-cors, *cors, same-origin
  //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //   headers: {
  //     "Content-Type": "application/json",
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   redirect: "follow", // manual, *follow, error
  //   body: JSON.stringify(data), // body data type must match "Content-Type" header
  // });
  

  // if (data) {
  //   contacts = matchSorter(contacts, data, { keys: "id" });
  // }
  return states; // parses JSON response into native JavaScript objects
  //return contacts.sort(sortBy("last", "createdAt"));
}


export async function getContact(slug) {
  let states = importsUs
  let state = states.find(state => state.slug === slug);
  console.log("state is: ", state)
  return state ?? null;
}

function set(states) {
  return importsUs.setItem("states", states);
}
