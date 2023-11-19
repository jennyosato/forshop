import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import clsx from "clsx";
import axios from "axios";
import { useSession } from "next-auth/react";
import toast from 'react-hot-toast'
import { SessionType } from "../../types";



function Rating({ id }: any) {
  const { data: session }: SessionType | any = useSession();
  const user = session?.user.name;
  const { _id } = id;
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  const [hoverValue, setHoverValue] = useState(undefined);
  const [err, setErr] = useState("");

  const handleClick = (value: number) => {
    setRating(value);
  };
  const handleHover = (value: number| any) => {
    setHoverValue(value);
  };
  const handleUnhover = () => {
    setHoverValue(undefined);
  };
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (session) {
      const res = await axios.post('/api/review', { rating, text, user, _id });
      toast.success(res.data.message, {
        duration: 3000
      });

      setRating(0);
      setText('');
    } else {
      setErr("!!Please sign In to leave a review");
    }





  };
  const stars = Array(5).fill(0);
  const starRating = stars.map((_, index) => {
    return (
      <FaStar
        key={index}
        className={clsx(
          "text-4xl cursor-pointer transition ease-in-out 1s",
          (hoverValue || rating) > index
            ? "text-orange-600"
            : "text-gray-300"
        )}
        onClick={() => handleClick(index + 1)}
        onMouseOver={() => handleHover(index + 1)}
        onMouseLeave={handleUnhover}
        
         />
    );
  });
  return (
    <div className=" flex flex-col items-center gap-4 m-auto shadow bg-white p-4">
      <p className="italic text-red-600 ">{err}</p>
      <div className="flex gap-2">{starRating}</div>
      <div className="flex flex-col items-center gap-2">
        <textarea placeholder="Write your review" value={text} className="border w-full p-2 outline-none" cols={50} rows={4} onChange={(e) => setText(e.target.value)} />
        <button className="px-6 py-2 rounded-sm text-white bg-gray-900" onClick={handleSubmit}>Submit</button>
      </div>
    </div>

  );

}

export default Rating;
