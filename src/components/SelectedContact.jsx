import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact ({ selectedContactId, setSelectedContactId }) {
    const [singleContact, setSingleContact] = useState(null);
    const fetchSingleContact = async () => {
        try {
          const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
          const result = await response.json();
          setSingleContact(result); 
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        if (selectedContactId) {
          fetchSingleContact();
        } else {
          setSingleContact(null);
        }
      }, []); 

    return (
        <div>
        {}
      </div>
    );
}