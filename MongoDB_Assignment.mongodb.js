use("OnlineEducationPlatform")

// Create Courses: insertMany()
db.Courses.insertMany([
    { courseID: 1, title: "Intro to Python", category: "Programming", price: 50, instructorID: 101, enrollmentCount: 120 },
    { courseID: 2, title: "Data Science with R", category: "Data Science", price: 75, instructorID: 102, enrollmentCount: 85 },
    { courseID: 3, title: "Machine Learning Basics", category: "Data Science", price: 100, instructorID: 103, enrollmentCount: 90 },
    { courseID: 4, title: "Web Development", category: "Programming", price: 60, instructorID: 104, enrollmentCount: 150 },
    { courseID: 5, title: "Quantum Physics", category: "Physics", price: 90, instructorID: 105, enrollmentCount: 30 },
    { courseID: 6, title: "Graphic Design", category: "Arts", price: 70, instructorID: 106, enrollmentCount: 45 },
    { courseID: 7, title: "Digital Marketing", category: "Business", price: 85, instructorID: 107, enrollmentCount: 110 },
    { courseID: 8, title: "Cybersecurity Fundamentals", category: "IT", price: 120, instructorID: 108, enrollmentCount: 60 },
    { courseID: 9, title: "Cloud Computing", category: "IT", price: 150, instructorID: 109, enrollmentCount: 25 },
    { courseID: 10, title: "Data Visualization", category: "Data Science", price: 80, instructorID: 110, enrollmentCount: 70 },
    { courseID: 11, title: "AI and Machine Learning", category: "AI", price: 200, instructorID: 111, enrollmentCount: 40 },
    { courseID: 12, title: "Introduction to SQL", category: "Database", price: 65, instructorID: 112, enrollmentCount: 95 },
    { courseID: 13, title: "Mobile App Development", category: "Programming", price: 110, instructorID: 113, enrollmentCount: 50 },
    { courseID: 14, title: "Entrepreneurship 101", category: "Business", price: 40, instructorID: 114, enrollmentCount: 75 },
    { courseID: 15, title: "Public Speaking Skills", category: "Communication", price: 55, instructorID: 115, enrollmentCount: 30 }
  ]);
// Create Courses: insertOne()
  db.Courses.insertOne({ courseID: 16, title: "Blockchain Basics", category: "IT", price: 95, instructorID: 116, enrollmentCount: 60 });

 // Create Instructors: insertMany()
 db.Instructors.insertMany([
    { instructorID: 101, name: "Walter White", expertise: "Python, Data Science", courses: [1, 11], rating: 4.8 },
    { instructorID: 102, name: "Sherlock Holmes", expertise: "Data Analysis, R", courses: [2, 14], rating: 4.5 },
    { instructorID: 103, name: "Tony Stark", expertise: "AI, Robotics", courses: [3, 11], rating: 4.9 },
    { instructorID: 104, name: "Hermione Granger", expertise: "Programming", courses: [4, 13], rating: 4.7 },
    { instructorID: 105, name: "Loki", expertise: "Physics, Database", courses: [5, 12], rating: 4.2 },
    { instructorID: 106, name: "Darth Vader", expertise: "Arts, Communication", courses: [6, 15], rating: 4.1 },
    { instructorID: 107, name: "Michel Scott", expertise: "Business, Leadership", courses: [7], rating: 4.4 },
    { instructorID: 108, name: "Frodo Baggins", expertise: "IT, Communication", courses: [8], rating: 4.3 },
    { instructorID: 109, name: "Han Solo", expertise: "AI, Data Analysis", courses: [9], rating: 4.6 },
    { instructorID: 110, name: "Wonder Woman", expertise: "Data Science, Business", courses: [10], rating: 4.8 },
    { instructorID: 111, name: "Jim Halpart", expertise: "AI, Business", courses: [11], rating: 4.9 },
    { instructorID: 112, name: "Jack Sparrow", expertise: "Database, Communication", courses: [12], rating: 4.0 },
    { instructorID: 113, name: "Elizabeth Bennet", expertise: "Programming, Data Science", courses: [13], rating: 4.5 },
    { instructorID: 114, name: "Albus Dumbledore", expertise: "Business, Communication", courses: [14], rating: 4.9 },
    { instructorID: 115, name: "Gandalf", expertise: "Communication, Leadership", courses: [15], rating: 4.8 }
  ]);
  
// Create Instructors: insertOne()
 db.Instructors.insertOne({ instructorID: 116, name: "Dexter Morgan", expertise: "Programming, IT", courses: [15], rating: 4.7 });
  
 // Create Students: insertMany()
 db.Students.insertMany([
  { studentID: 201, name: "John Doe", email: "john.doe@gmail.com", enrolledCourses: [{ courseID: 1, progress: 80 }] },
  { studentID: 202, name: "Jane Smith", email: "jane.smith@gmail.com", enrolledCourses: [{ courseID: 2, progress: 50 }] },
  { studentID: 203, name: "Clark Kent", email: "clark.kent@gmail.com", enrolledCourses: [{ courseID: 3, progress: 90 }] },
  { studentID: 204, name: "Bruce Wayne", email: "bruce.wayne@gmail.com", enrolledCourses: [{ courseID: 4, progress: 40 }] },
  { studentID: 205, name: "Dwight Schrute", email: "dwight.schrute.stark@gmail.com", enrolledCourses: [{ courseID: 5, progress: 70 }] },
  { studentID: 206, name: "Peter Parker", email: "peter.parker@gmail.com", enrolledCourses: [{ courseID: 6, progress: 20 }] },
  { studentID: 207, name: "George Costanza", email: "george.costanza@gmail.com", enrolledCourses: [{ courseID: 7, progress: 60 }] },
  { studentID: 208, name: "Katniss Everdeen", email: "katniss.everdeen@gmail.com", enrolledCourses: [{ courseID: 8, progress: 50 }] },
  { studentID: 209, name: "Pheobe Buffay", email: "pheobe.buffay@gmail.com", enrolledCourses: [{ courseID: 9, progress: 30 }] },
  { studentID: 210, name: "Darth Vader", email: "darth.vader@gmail.com", enrolledCourses: [{ courseID: 10, progress: 80 }] },
  { studentID: 211, name: "Walter White", email: "walter.white@gmail.com", enrolledCourses: [{ courseID: 11, progress: 90 }] },
  { studentID: 212, name: "Sherlock Holmes", email: "sherlock.holmes@gmail.com", enrolledCourses: [{ courseID: 12, progress: 100 }] },
  { studentID: 213, name: "Harry Potter", email: "harry.potter@gmail.com", enrolledCourses: [{ courseID: 13, progress: 75 }] },
  { studentID: 214, name: "Rachel Green", email: "rachel.green@gmail.com", enrolledCourses: [{ courseID: 14, progress: 40 }] },
  { studentID: 215, name: "Monica Geller", email: "monica.geller@gmail.com", enrolledCourses: [{ courseID: 15, progress: 55 }] }
]);

// Create Students: insertOne()
db.Students.insertOne({ studentID: 216, name: "Ross Geller", email: "ross.geller@gmail.com", enrolledCourses: [{ courseID: 15, progress: 0 }] });

 // Create Payments: insertMany()
db.Payments.insertMany([
  { paymentID: 301, studentID: 201, courseID: 1, amount: 50, status: "Completed" },
  { paymentID: 302, studentID: 202, courseID: 2, amount: 75, status: "Completed" },
  { paymentID: 303, studentID: 203, courseID: 3, amount: 100, status: "Pending" },
  { paymentID: 304, studentID: 204, courseID: 4, amount: 60, status: "Failed" },
  { paymentID: 305, studentID: 205, courseID: 5, amount: 90, status: "Completed" },
  { paymentID: 306, studentID: 206, courseID: 6, amount: 70, status: "Completed" },
  { paymentID: 307, studentID: 207, courseID: 7, amount: 85, status: "Completed" },
  { paymentID: 308, studentID: 208, courseID: 8, amount: 120, status: "Failed" },
  { paymentID: 309, studentID: 209, courseID: 9, amount: 150, status: "Pending" },
  { paymentID: 310, studentID: 210, courseID: 10, amount: 80, status: "Completed" },
  { paymentID: 311, studentID: 211, courseID: 11, amount: 200, status: "Completed" },
  { paymentID: 312, studentID: 212, courseID: 12, amount: 65, status: "Pending" },
  { paymentID: 313, studentID: 213, courseID: 13, amount: 110, status: "Failed" },
  { paymentID: 314, studentID: 214, courseID: 14, amount: 40, status: "Completed" },
  { paymentID: 315, studentID: 215, courseID: 15, amount: 55, status: "Completed" },
  { paymentID: 317, studentID: 215, courseID: 15, amount: 90, status: "Completed" }
]);

// Create Payments: insertOne()
db.Payments.insertOne({ paymentID: 316, studentID: 216, courseID: 15, amount: 90, status: "Pending" })

//Courses: 
// Read : findOne(),find()
db.Courses.findOne({ price: {$lt : 80} })
db.Courses.find({ category: "Programming" })
// Update : updateOne(),updateMany()
db.Courses.updateOne({ courseID: 1 }, { $set: { price: 55 } })
db.Courses.updateMany({ category: "Data Science" }, { $inc: { price: 5 } })
// Delete : deleteOne(),deleteMany
db.Courses.deleteOne({ courseID: 16 })
db.Courses.deleteMany({ enrollmentCount: { $lt: 50 } })
// Aggregation pipeline
db.Courses.aggregate([
  { $group: { _id: "$category", avgEnrollment: { $avg: "$enrollmentCount" } } }
]);

//Instructors:
// Read : findOne(),find()
db.Instructors.find()
db.Instructors.findOne({ rating: { $lte: 4.5 } })
db.Instructors.find({ rating: { $gte: 4.5 } })

// Update : updateOne(),updateMany()
db.Instructors.updateOne({ name: "Sherlock Holmes" }, { $set: { rating: 4.6 } })
db.Instructors.updateMany({ expertise: /Data/ }, { $set: { expertise: "Data Science" } })

// Delete : deleteOne(),deleteMany
db.Instructors.deleteOne({ instructorID: 116 });
db.Instructors.deleteMany({ rating: { $lte: 4.0 } });

// Aggregation pipeline:
db.Instructors.aggregate([
  {$match: { rating: { $gte: 4.0 } }},
  {$project: { name: 1,rating: 1 }},
  {$group: { _id: "$name",totalRatings: { $sum: "$rating" },instructorCount: { $sum: 1 } }}
]);

//Students:
// Read : findOne(),find()
db.Students.findOne({enrolledCourses:{$elemMatch:{progress:{ $gte: 80 } }}});
db.Students.find({enrolledCourses:{$elemMatch:{progress:{ $gte: 80 } }} });

// Update : updateOne(),updateMany()
db.Students.updateOne({ name: "John Doe" }, { $set: { email: "john@gmail.com" } });
db.Students.updateMany({ "enrolledCourses.progress": { $lt: 40 } }, { $set: { "enrolledCourses.$[].progress": 40 } });

// Delete : deleteOne(),deleteMany
db.Students.deleteOne({ studentID: 216 });
db.Students.find()
db.Students.deleteMany({ "enrolledCourses.progress": { "$lte": 40 } });

// Aggregation pipeline:
db.Students.aggregate([
  { $group: {_id: "$enrolledCourses.courseID",avgProgress: { $avg: { $arrayElemAt: [ "$enrolledCourses.progress", 0 ] } } } },
  {$match: { avgProgress: { $gt: 70 } } }
]);

//Payments:
// Read : findOne(),find()
db.Payments.findOne({ status: "Completed" });
db.Payments.find({ status: "Completed" });

// Update : updateOne(),updateMany()
db.Payments.updateOne({ paymentID: 316 }, { $set: { status: "Completed" } });
db.Payments.updateMany({ status: "Pending" }, { $set: { status: "Failed" } });

// Delete : deleteOne(),deleteMany
db.Payments.deleteOne({ paymentID: 316 });
db.Payments.deleteMany({ status: "Failed" });

// Aggregation pipeline:
db.Payments.aggregate([
  { $match: { status: "Completed" } },
  { $group: { _id: "$courseID", totalAmount: { $sum: "$amount" } } }
]);