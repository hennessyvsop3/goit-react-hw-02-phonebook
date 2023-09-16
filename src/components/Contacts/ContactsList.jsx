import React from 'react'

export const ContactsList = ({contacts}) => {
  return (
    <div>
      
      <ul>
              {contacts.map(item => (
          <li key={item.id}>
            {item.name}: {item.number}{' '}
          </li>
        ))}
      </ul>
    </div>
  );
}
