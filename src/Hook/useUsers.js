import React, { useEffect, useState } from 'react';

const useUsers = (data) => {
    // প্রথমত Props আকারে data রিসিভ করছি।
    const [users, setUsers] = useState([]);
    // একটি useState() ঘোষনা করছি এবং ডাটাকে প্রসেস করার জন্য useEffect() ব্যবহার করেছি।
    useEffect(() => {
        fetch(data)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    // console.log(users);

    return users;
    // একটি ফাংশন একটিমাত্র return করতে পারে তাই users কেই রিটার্ন করে দিলাম। তবে চাইলে র‌্যাপ করে ফাংশনসহ অনেক ডাটাও পাঠানো যায়।
};

export default useUsers;