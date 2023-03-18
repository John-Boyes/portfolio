import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import importsUs from "./data/imports-us";

const url = 'https://johnboyes.dev/posts/wp-json/wp/v2/posts/?_fields[]=id&_fields[]=slug&_fields[]=title&_fields[]=content&_fields[]=modified&per_page=100&order_by=id&order=asc'


export async function getContacts(url, data = {importsUs}) {
  const contacts = importsUs
  console.log(contacts)
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
  return contacts; // parses JSON response into native JavaScript objects
  //return contacts.sort(sortBy("last", "createdAt"));
}

// export async function getContacts(query) {
//   await fakeNetwork(`getContacts:${query}`);
//   let contacts = await localforage.getItem("contacts");
//   if (!contacts) contacts = [];
//   if (query) {
//     contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
//   }
//   return contacts.sort(sortBy("last", "createdAt"));
// }

export async function getContact(slug) {
  let contact = contacts.find(contact => contact.slug === slug);
  return contact ?? null;
}

function set(contacts) {
  return importsUs.setItem("contacts", contacts);
}
