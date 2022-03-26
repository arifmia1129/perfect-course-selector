import React from 'react';
import "./QA.css";
const QA = () => {
    return (
        <div>
            <div>
                <h3>প্রশ্ন-১: React কিভাবে কাজ করে?</h3>
                <p>
                    উত্তর : Javascript মূলত কাজ করে virtual dom এর উপর ভিত্তি করে। অর্থাৎ behind the scene এটি একটি virtual dom create করে। যখন কোনো read or write or other operation এর প্রয়োজন হয় তখন এটি virtual dom ব্যবহার করে। virtual dom তখন browser dom update করার সবচেয়ে সহজ ও কার্যকর সমাধান বের করে উক্ত অপারেশন সম্পন্ন করে।
                </p>
            </div>
            <div>
                <h3>প্রশ্ন-২: Props vs state?</h3>
                <p>
                    উত্তর :
                    Props:
                    ডাটা কে এক component থেকে অন্য component এ পাঠানোর জন্য ব্যবহার করা হয়। props কে শুধুমাত্র read করা যায়। এটি Immutable।
                    <br />
                    State :
                    ডাটা কে same component ব্যবহার করতে এটি ব্যবহার করা হয়। state কে read এবং write করা যায়। এটি Mutable।
                </p>
            </div>
            <div>
                <h3>প্রশ্ন-৩: useState কিভাবে কাজ করে?</h3>
                <p>
                    উত্তর : useState তখনি ব্যবহার করা হয় যখন কোন কিছু পরিবর্তন হতেই পারে আবার নাও পারে। এটি এমন একটি হুক (অর্থাৎ ফাংশন) যা উপাদান গুলো রাখার জন্য একটি variable প্রদান করে এবং পরিবর্তনশীল উপাদান গুলো কে আপডেট করতে একটি ফাংশন ভেরিয়েবল প্রদান করে। Example : const [books, setBooks] = useState([]);
                </p>
            </div>
        </div>
    );
};

export default QA;