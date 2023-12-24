import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Select, Textarea } from 'flowbite-react';
import { useParams, useLoaderData } from 'react-router-dom'

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl} = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Mystery & Thriller", 
    "Historical",
    "Sports",
    "Childrens",
    "Comics",
    "Music"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
        console.log(event.target.value);
        setSelectedBookCategory(event.target.value);
  } 
   // handle book submission
   const handleUpdate = (event) => {
      event.preventDefault();
      const form = event.target;

      const bookTitle = form.bookTitle.value;
      const authorName = form.authorName.value;
      const imageUrl = form.imageUrl.value;
      const category = form.categoryName.value;
      const bookDescription = form.bookDescription.value;
      const bookPdfUrl = form.bookPdfUrl.value;
      
      const updateBookObj = {
        bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl
      }
      // console.log(bookObj)
      // update book data
      fetch(`http://localhost:420/book/${id}`,{
        method:"PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updateBookObj)
      }).then(res => res.json()).then( data => {
        alert("Book is updated successfully!!!")
      })
  return (
    <div className='px-4 my-12'>
    <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2> 
    <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      {/* first row */}
    <div className='flex gap-8'>
    <div className='lg:w-1/2'>
      <div className="mb-2 block">
        <Label htmlFor="bookTitle" value="Book Title" />
      </div>
      <TextInput id="bookTitle" name='bookTitle'  placeholder="Book name" required type="text" defaultValue={bookTitle} />
    </div>
    {/* authorName */}
    <div className='lg:w-1/2'>
      <div className="mb-2 block">
        <Label htmlFor="authorName" value="Author Name" />
      </div>
      <TextInput id="authorName" name='authorName' type="text" placeholder="Author name" required defaultValue={authorName} />
    </div>
    </div>
      
      {/* 2nd row */}
    <div className='flex gap-8'>
    <div className='lg:w-1/2'>
      <div className="mb-2 block">
        <Label htmlFor="imageUrl" value="Book Image Url" />
      </div>
      <TextInput id="imageUrl" name='imageUrl' type="text" placeholder="Book Image Url" required  defaultValue={imageUrl}/>
    </div>

    {/* Category */}
    <div className='lg:w-1/2'>
    <div className="mb-2 block">
        <Label htmlFor="inputState" value="Book Category" />
      </div> 
       
       <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
        {
          bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
        }

       </Select>
    </div>
    </div>
      
      {/* bookDescription */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name="bookDescription"placeholder="Write your book description..." required className='w-full' rows={6}  defaultValue={bookDescription}/>
      </div>

      {/* book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfUrl" value="Book Pdf Url" />
        </div>
        <TextInput id="bookPdfUrl" name='bookPdfUrl' type="text" placeholder="book pdf url" required defaultValue={bookPdfUrl}/>
      </div>

      <Button type="submit" className='mt-5'>Update Book</Button>
  </form>
  </div>

  )

}
}

export default EditBooks
