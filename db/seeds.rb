# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Blog.destroy_all
Collection.destroy_all
Wip.destroy_all


admin = User.create!({
    email: "JasenABaker@gmail.com",
    nickname: "Admin",
    password: "1873jbbb",
    encrypted_password: "1873jbbb",
    name: "Jasen Baker",
    admin: true,
    image: "https://i.imgur.com/ZNTTFCp.jpg",
})

first = admin.blogs.create!({
    title: "First Blog",
    content: "Bacon ipsum dolor amet jowl cupim tenderloin, frankfurter filet mignon meatball flank ribeye shankle. Bacon jowl short ribs sausage, pork belly tail andouille hamburger capicola rump pig shoulder. Picanha drumstick cupim meatloaf flank brisket tenderloin tri-tip capicola short loin leberkas swine tongue bacon burgdoggen. Swine chicken shank, fatback beef alcatra short ribs rump biltong.

    Tail short loin filet mignon tenderloin cow, pastrami meatball kevin. Chicken ham tri-tip, rump pork belly capicola filet mignon frankfurter sausage ball tip bresaola. Porchetta fatback hamburger, bresaola cupim buffalo drumstick burgdoggen beef. Jerky meatball pig bresaola, shoulder alcatra leberkas pork flank tongue.
    
    Capicola tongue chuck flank andouille beef ribs hamburger picanha meatloaf fatback salami short ribs turkey. Kevin cupim swine bacon fatback pork belly shankle, pancetta porchetta ribeye. Boudin leberkas filet mignon pancetta capicola t-bone sausage hamburger sirloin. Spare ribs shank drumstick boudin jowl pork. Kielbasa pork loin jowl pork chop shank, ribeye bresaola.
    
    Strip steak sirloin bresaola meatloaf cow filet mignon boudin turducken. Spare ribs short loin frankfurter bresaola pig venison salami ham hock burgdoggen. Corned beef beef ribs fatback burgdoggen boudin shank t-bone strip steak short loin ball tip frankfurter kielbasa swine meatloaf bresaola. Shankle kevin chuck short ribs swine, pig spare ribs cow flank filet mignon pancetta jowl meatball. Tongue tail capicola burgdoggen beef ribs andouille biltong ground round turkey picanha. Capicola rump alcatra filet mignon. Meatloaf strip steak ground round sirloin."
})
second = admin.blogs.create!({
    title: "second Blog",
    content: "Bacon ipsum dolor amet jowl cupim tenderloin, frankfurter filet mignon meatball flank ribeye shankle. Bacon jowl short ribs sausage, pork belly tail andouille hamburger capicola rump pig shoulder. Picanha drumstick cupim meatloaf flank brisket tenderloin tri-tip capicola short loin leberkas swine tongue bacon burgdoggen. Swine chicken shank, fatback beef alcatra short ribs rump biltong.

    Tail short loin filet mignon tenderloin cow, pastrami meatball kevin. Chicken ham tri-tip, rump pork belly capicola filet mignon frankfurter sausage ball tip bresaola. Porchetta fatback hamburger, bresaola cupim buffalo drumstick burgdoggen beef. Jerky meatball pig bresaola, shoulder alcatra leberkas pork flank tongue.
    
    Capicola tongue chuck flank andouille beef ribs hamburger picanha meatloaf fatback salami short ribs turkey. Kevin cupim swine bacon fatback pork belly shankle, pancetta porchetta ribeye. Boudin leberkas filet mignon pancetta capicola t-bone sausage hamburger sirloin. Spare ribs shank drumstick boudin jowl pork. Kielbasa pork loin jowl pork chop shank, ribeye bresaola.
    
    Strip steak sirloin bresaola meatloaf cow filet mignon boudin turducken. Spare ribs short loin frankfurter bresaola pig venison salami ham hock burgdoggen. Corned beef beef ribs fatback burgdoggen boudin shank t-bone strip steak short loin ball tip frankfurter kielbasa swine meatloaf bresaola. Shankle kevin chuck short ribs swine, pig spare ribs cow flank filet mignon pancetta jowl meatball. Tongue tail capicola burgdoggen beef ribs andouille biltong ground round turkey picanha. Capicola rump alcatra filet mignon. Meatloaf strip steak ground round sirloin."
})
third = admin.blogs.create!({
    title: "third Blog",
    content: "Bacon ipsum dolor amet jowl cupim tenderloin, frankfurter filet mignon meatball flank ribeye shankle. Bacon jowl short ribs sausage, pork belly tail andouille hamburger capicola rump pig shoulder. Picanha drumstick cupim meatloaf flank brisket tenderloin tri-tip capicola short loin leberkas swine tongue bacon burgdoggen. Swine chicken shank, fatback beef alcatra short ribs rump biltong.

    Tail short loin filet mignon tenderloin cow, pastrami meatball kevin. Chicken ham tri-tip, rump pork belly capicola filet mignon frankfurter sausage ball tip bresaola. Porchetta fatback hamburger, bresaola cupim buffalo drumstick burgdoggen beef. Jerky meatball pig bresaola, shoulder alcatra leberkas pork flank tongue.
    
    Capicola tongue chuck flank andouille beef ribs hamburger picanha meatloaf fatback salami short ribs turkey. Kevin cupim swine bacon fatback pork belly shankle, pancetta porchetta ribeye. Boudin leberkas filet mignon pancetta capicola t-bone sausage hamburger sirloin. Spare ribs shank drumstick boudin jowl pork. Kielbasa pork loin jowl pork chop shank, ribeye bresaola.
    
    Strip steak sirloin bresaola meatloaf cow filet mignon boudin turducken. Spare ribs short loin frankfurter bresaola pig venison salami ham hock burgdoggen. Corned beef beef ribs fatback burgdoggen boudin shank t-bone strip steak short loin ball tip frankfurter kielbasa swine meatloaf bresaola. Shankle kevin chuck short ribs swine, pig spare ribs cow flank filet mignon pancetta jowl meatball. Tongue tail capicola burgdoggen beef ribs andouille biltong ground round turkey picanha. Capicola rump alcatra filet mignon. Meatloaf strip steak ground round sirloin."
})
fourth = admin.blogs.create!({
    title: "fourth Blog",
    content: "Bacon ipsum dolor amet jowl cupim tenderloin, frankfurter filet mignon meatball flank ribeye shankle. Bacon jowl short ribs sausage, pork belly tail andouille hamburger capicola rump pig shoulder. Picanha drumstick cupim meatloaf flank brisket tenderloin tri-tip capicola short loin leberkas swine tongue bacon burgdoggen. Swine chicken shank, fatback beef alcatra short ribs rump biltong.

    Tail short loin filet mignon tenderloin cow, pastrami meatball kevin. Chicken ham tri-tip, rump pork belly capicola filet mignon frankfurter sausage ball tip bresaola. Porchetta fatback hamburger, bresaola cupim buffalo drumstick burgdoggen beef. Jerky meatball pig bresaola, shoulder alcatra leberkas pork flank tongue.
    
    Capicola tongue chuck flank andouille beef ribs hamburger picanha meatloaf fatback salami short ribs turkey. Kevin cupim swine bacon fatback pork belly shankle, pancetta porchetta ribeye. Boudin leberkas filet mignon pancetta capicola t-bone sausage hamburger sirloin. Spare ribs shank drumstick boudin jowl pork. Kielbasa pork loin jowl pork chop shank, ribeye bresaola.
    
    Strip steak sirloin bresaola meatloaf cow filet mignon boudin turducken. Spare ribs short loin frankfurter bresaola pig venison salami ham hock burgdoggen. Corned beef beef ribs fatback burgdoggen boudin shank t-bone strip steak short loin ball tip frankfurter kielbasa swine meatloaf bresaola. Shankle kevin chuck short ribs swine, pig spare ribs cow flank filet mignon pancetta jowl meatball. Tongue tail capicola burgdoggen beef ribs andouille biltong ground round turkey picanha. Capicola rump alcatra filet mignon. Meatloaf strip steak ground round sirloin."
})
fifth = admin.blogs.create!({
    title: "fifth Blog",
    content: "Bacon ipsum dolor amet jowl cupim tenderloin, frankfurter filet mignon meatball flank ribeye shankle. Bacon jowl short ribs sausage, pork belly tail andouille hamburger capicola rump pig shoulder. Picanha drumstick cupim meatloaf flank brisket tenderloin tri-tip capicola short loin leberkas swine tongue bacon burgdoggen. Swine chicken shank, fatback beef alcatra short ribs rump biltong.

    Tail short loin filet mignon tenderloin cow, pastrami meatball kevin. Chicken ham tri-tip, rump pork belly capicola filet mignon frankfurter sausage ball tip bresaola. Porchetta fatback hamburger, bresaola cupim buffalo drumstick burgdoggen beef. Jerky meatball pig bresaola, shoulder alcatra leberkas pork flank tongue.
    
    Capicola tongue chuck flank andouille beef ribs hamburger picanha meatloaf fatback salami short ribs turkey. Kevin cupim swine bacon fatback pork belly shankle, pancetta porchetta ribeye. Boudin leberkas filet mignon pancetta capicola t-bone sausage hamburger sirloin. Spare ribs shank drumstick boudin jowl pork. Kielbasa pork loin jowl pork chop shank, ribeye bresaola.
    
    Strip steak sirloin bresaola meatloaf cow filet mignon boudin turducken. Spare ribs short loin frankfurter bresaola pig venison salami ham hock burgdoggen. Corned beef beef ribs fatback burgdoggen boudin shank t-bone strip steak short loin ball tip frankfurter kielbasa swine meatloaf bresaola. Shankle kevin chuck short ribs swine, pig spare ribs cow flank filet mignon pancetta jowl meatball. Tongue tail capicola burgdoggen beef ribs andouille biltong ground round turkey picanha. Capicola rump alcatra filet mignon. Meatloaf strip steak ground round sirloin."
})
sixth = admin.blogs.create!({
    title: "sxixth Blog",
    content: "Bacon ipsum dolor amet jowl cupim tenderloin, frankfurter filet mignon meatball flank ribeye shankle. Bacon jowl short ribs sausage, pork belly tail andouille hamburger capicola rump pig shoulder. Picanha drumstick cupim meatloaf flank brisket tenderloin tri-tip capicola short loin leberkas swine tongue bacon burgdoggen. Swine chicken shank, fatback beef alcatra short ribs rump biltong.

    Tail short loin filet mignon tenderloin cow, pastrami meatball kevin. Chicken ham tri-tip, rump pork belly capicola filet mignon frankfurter sausage ball tip bresaola. Porchetta fatback hamburger, bresaola cupim buffalo drumstick burgdoggen beef. Jerky meatball pig bresaola, shoulder alcatra leberkas pork flank tongue.
    
    Capicola tongue chuck flank andouille beef ribs hamburger picanha meatloaf fatback salami short ribs turkey. Kevin cupim swine bacon fatback pork belly shankle, pancetta porchetta ribeye. Boudin leberkas filet mignon pancetta capicola t-bone sausage hamburger sirloin. Spare ribs shank drumstick boudin jowl pork. Kielbasa pork loin jowl pork chop shank, ribeye bresaola.
    
    Strip steak sirloin bresaola meatloaf cow filet mignon boudin turducken. Spare ribs short loin frankfurter bresaola pig venison salami ham hock burgdoggen. Corned beef beef ribs fatback burgdoggen boudin shank t-bone strip steak short loin ball tip frankfurter kielbasa swine meatloaf bresaola. Shankle kevin chuck short ribs swine, pig spare ribs cow flank filet mignon pancetta jowl meatball. Tongue tail capicola burgdoggen beef ribs andouille biltong ground round turkey picanha. Capicola rump alcatra filet mignon. Meatloaf strip steak ground round sirloin."
})


Tales = admin.collections.create!({
    title: "Tales From The Fence",
    info: "A collection of stories inspired by the ablum, Good Apollo volume: I, by the band Coheed and Cambria."

})
always = Tales.shorts.create!({
    title:"Always and Never",
    content: "Bacon ipsum dolor amet jowl cupim tenderloin, frankfurter filet mignon meatball flank ribeye shankle. Bacon jowl short ribs sausage, pork belly tail andouille hamburger capicola rump pig shoulder. Picanha drumstick cupim meatloaf flank brisket tenderloin tri-tip capicola short loin leberkas swine tongue bacon burgdoggen. Swine chicken shank, fatback beef alcatra short ribs rump biltong.

    Tail short loin filet mignon tenderloin cow, pastrami meatball kevin. Chicken ham tri-tip, rump pork belly capicola filet mignon frankfurter sausage ball tip bresaola. Porchetta fatback hamburger, bresaola cupim buffalo drumstick burgdoggen beef. Jerky meatball pig bresaola, shoulder alcatra leberkas pork flank tongue.
    
    Capicola tongue chuck flank andouille beef ribs hamburger picanha meatloaf fatback salami short ribs turkey. Kevin cupim swine bacon fatback pork belly shankle, pancetta porchetta ribeye. Boudin leberkas filet mignon pancetta capicola t-bone sausage hamburger sirloin. Spare ribs shank drumstick boudin jowl pork. Kielbasa pork loin jowl pork chop shank, ribeye bresaola.
    
    Strip steak sirloin bresaola meatloaf cow filet mignon boudin turducken. Spare ribs short loin frankfurter bresaola pig venison salami ham hock burgdoggen. Corned beef beef ribs fatback burgdoggen boudin shank t-bone strip steak short loin ball tip frankfurter kielbasa swine meatloaf bresaola. Shankle kevin chuck short ribs swine, pig spare ribs cow flank filet mignon pancetta jowl meatball. Tongue tail capicola burgdoggen beef ribs andouille biltong ground round turkey picanha. Capicola rump alcatra filet mignon. Meatloaf strip steak ground round sirloin."
})
two = Tales.shorts.create!({
    title:"Two",
    content: "Bacon ipsum dolor amet jowl cupim tenderloin, frankfurter filet mignon meatball flank ribeye shankle. Bacon jowl short ribs sausage, pork belly tail andouille hamburger capicola rump pig shoulder. Picanha drumstick cupim meatloaf flank brisket tenderloin tri-tip capicola short loin leberkas swine tongue bacon burgdoggen. Swine chicken shank, fatback beef alcatra short ribs rump biltong.

    Tail short loin filet mignon tenderloin cow, pastrami meatball kevin. Chicken ham tri-tip, rump pork belly capicola filet mignon frankfurter sausage ball tip bresaola. Porchetta fatback hamburger, bresaola cupim buffalo drumstick burgdoggen beef. Jerky meatball pig bresaola, shoulder alcatra leberkas pork flank tongue.
    
    Capicola tongue chuck flank andouille beef ribs hamburger picanha meatloaf fatback salami short ribs turkey. Kevin cupim swine bacon fatback pork belly shankle, pancetta porchetta ribeye. Boudin leberkas filet mignon pancetta capicola t-bone sausage hamburger sirloin. Spare ribs shank drumstick boudin jowl pork. Kielbasa pork loin jowl pork chop shank, ribeye bresaola.
    
    Strip steak sirloin bresaola meatloaf cow filet mignon boudin turducken. Spare ribs short loin frankfurter bresaola pig venison salami ham hock burgdoggen. Corned beef beef ribs fatback burgdoggen boudin shank t-bone strip steak short loin ball tip frankfurter kielbasa swine meatloaf bresaola. Shankle kevin chuck short ribs swine, pig spare ribs cow flank filet mignon pancetta jowl meatball. Tongue tail capicola burgdoggen beef ribs andouille biltong ground round turkey picanha. Capicola rump alcatra filet mignon. Meatloaf strip steak ground round sirloin."
})
three = Tales.shorts.create!({
    title:"three",
    content: "Bacon ipsum dolor amet jowl cupim tenderloin, frankfurter filet mignon meatball flank ribeye shankle. Bacon jowl short ribs sausage, pork belly tail andouille hamburger capicola rump pig shoulder. Picanha drumstick cupim meatloaf flank brisket tenderloin tri-tip capicola short loin leberkas swine tongue bacon burgdoggen. Swine chicken shank, fatback beef alcatra short ribs rump biltong.

    Tail short loin filet mignon tenderloin cow, pastrami meatball kevin. Chicken ham tri-tip, rump pork belly capicola filet mignon frankfurter sausage ball tip bresaola. Porchetta fatback hamburger, bresaola cupim buffalo drumstick burgdoggen beef. Jerky meatball pig bresaola, shoulder alcatra leberkas pork flank tongue.
    
    Capicola tongue chuck flank andouille beef ribs hamburger picanha meatloaf fatback salami short ribs turkey. Kevin cupim swine bacon fatback pork belly shankle, pancetta porchetta ribeye. Boudin leberkas filet mignon pancetta capicola t-bone sausage hamburger sirloin. Spare ribs shank drumstick boudin jowl pork. Kielbasa pork loin jowl pork chop shank, ribeye bresaola.
    
    Strip steak sirloin bresaola meatloaf cow filet mignon boudin turducken. Spare ribs short loin frankfurter bresaola pig venison salami ham hock burgdoggen. Corned beef beef ribs fatback burgdoggen boudin shank t-bone strip steak short loin ball tip frankfurter kielbasa swine meatloaf bresaola. Shankle kevin chuck short ribs swine, pig spare ribs cow flank filet mignon pancetta jowl meatball. Tongue tail capicola burgdoggen beef ribs andouille biltong ground round turkey picanha. Capicola rump alcatra filet mignon. Meatloaf strip steak ground round sirloin."
})
four = Tales.shorts.create!({
    title:"four",
    content: "Bacon ipsum dolor amet jowl cupim tenderloin, frankfurter filet mignon meatball flank ribeye shankle. Bacon jowl short ribs sausage, pork belly tail andouille hamburger capicola rump pig shoulder. Picanha drumstick cupim meatloaf flank brisket tenderloin tri-tip capicola short loin leberkas swine tongue bacon burgdoggen. Swine chicken shank, fatback beef alcatra short ribs rump biltong.

    Tail short loin filet mignon tenderloin cow, pastrami meatball kevin. Chicken ham tri-tip, rump pork belly capicola filet mignon frankfurter sausage ball tip bresaola. Porchetta fatback hamburger, bresaola cupim buffalo drumstick burgdoggen beef. Jerky meatball pig bresaola, shoulder alcatra leberkas pork flank tongue.
    
    Capicola tongue chuck flank andouille beef ribs hamburger picanha meatloaf fatback salami short ribs turkey. Kevin cupim swine bacon fatback pork belly shankle, pancetta porchetta ribeye. Boudin leberkas filet mignon pancetta capicola t-bone sausage hamburger sirloin. Spare ribs shank drumstick boudin jowl pork. Kielbasa pork loin jowl pork chop shank, ribeye bresaola.
    
    Strip steak sirloin bresaola meatloaf cow filet mignon boudin turducken. Spare ribs short loin frankfurter bresaola pig venison salami ham hock burgdoggen. Corned beef beef ribs fatback burgdoggen boudin shank t-bone strip steak short loin ball tip frankfurter kielbasa swine meatloaf bresaola. Shankle kevin chuck short ribs swine, pig spare ribs cow flank filet mignon pancetta jowl meatball. Tongue tail capicola burgdoggen beef ribs andouille biltong ground round turkey picanha. Capicola rump alcatra filet mignon. Meatloaf strip steak ground round sirloin."
})
five = Tales.shorts.create!({
    title:"five",
    content: "Bacon ipsum dolor amet jowl cupim tenderloin, frankfurter filet mignon meatball flank ribeye shankle. Bacon jowl short ribs sausage, pork belly tail andouille hamburger capicola rump pig shoulder. Picanha drumstick cupim meatloaf flank brisket tenderloin tri-tip capicola short loin leberkas swine tongue bacon burgdoggen. Swine chicken shank, fatback beef alcatra short ribs rump biltong.

    Tail short loin filet mignon tenderloin cow, pastrami meatball kevin. Chicken ham tri-tip, rump pork belly capicola filet mignon frankfurter sausage ball tip bresaola. Porchetta fatback hamburger, bresaola cupim buffalo drumstick burgdoggen beef. Jerky meatball pig bresaola, shoulder alcatra leberkas pork flank tongue.
    
    Capicola tongue chuck flank andouille beef ribs hamburger picanha meatloaf fatback salami short ribs turkey. Kevin cupim swine bacon fatback pork belly shankle, pancetta porchetta ribeye. Boudin leberkas filet mignon pancetta capicola t-bone sausage hamburger sirloin. Spare ribs shank drumstick boudin jowl pork. Kielbasa pork loin jowl pork chop shank, ribeye bresaola.
    
    Strip steak sirloin bresaola meatloaf cow filet mignon boudin turducken. Spare ribs short loin frankfurter bresaola pig venison salami ham hock burgdoggen. Corned beef beef ribs fatback burgdoggen boudin shank t-bone strip steak short loin ball tip frankfurter kielbasa swine meatloaf bresaola. Shankle kevin chuck short ribs swine, pig spare ribs cow flank filet mignon pancetta jowl meatball. Tongue tail capicola burgdoggen beef ribs andouille biltong ground round turkey picanha. Capicola rump alcatra filet mignon. Meatloaf strip steak ground round sirloin."
})
six = Tales.shorts.create!({
    title:"six",
    content: "Bacon ipsum dolor amet jowl cupim tenderloin, frankfurter filet mignon meatball flank ribeye shankle. Bacon jowl short ribs sausage, pork belly tail andouille hamburger capicola rump pig shoulder. Picanha drumstick cupim meatloaf flank brisket tenderloin tri-tip capicola short loin leberkas swine tongue bacon burgdoggen. Swine chicken shank, fatback beef alcatra short ribs rump biltong.

    Tail short loin filet mignon tenderloin cow, pastrami meatball kevin. Chicken ham tri-tip, rump pork belly capicola filet mignon frankfurter sausage ball tip bresaola. Porchetta fatback hamburger, bresaola cupim buffalo drumstick burgdoggen beef. Jerky meatball pig bresaola, shoulder alcatra leberkas pork flank tongue.
    
    Capicola tongue chuck flank andouille beef ribs hamburger picanha meatloaf fatback salami short ribs turkey. Kevin cupim swine bacon fatback pork belly shankle, pancetta porchetta ribeye. Boudin leberkas filet mignon pancetta capicola t-bone sausage hamburger sirloin. Spare ribs shank drumstick boudin jowl pork. Kielbasa pork loin jowl pork chop shank, ribeye bresaola.
    
    Strip steak sirloin bresaola meatloaf cow filet mignon boudin turducken. Spare ribs short loin frankfurter bresaola pig venison salami ham hock burgdoggen. Corned beef beef ribs fatback burgdoggen boudin shank t-bone strip steak short loin ball tip frankfurter kielbasa swine meatloaf bresaola. Shankle kevin chuck short ribs swine, pig spare ribs cow flank filet mignon pancetta jowl meatball. Tongue tail capicola burgdoggen beef ribs andouille biltong ground round turkey picanha. Capicola rump alcatra filet mignon. Meatloaf strip steak ground round sirloin."
})

pirate = admin.wips.create!({
    title: "Pirates of Calypso",
    content:"Bacon ipsum dolor amet jowl cupim tenderloin, frankfurter filet mignon meatball flank ribeye shankle. Bacon jowl short ribs sausage, pork belly tail andouille hamburger capicola rump pig shoulder. Picanha drumstick cupim meatloaf flank brisket tenderloin tri-tip capicola short loin leberkas swine tongue bacon burgdoggen. Swine chicken shank, fatback beef alcatra short ribs rump biltong.

    Tail short loin filet mignon tenderloin cow, pastrami meatball kevin. Chicken ham tri-tip, rump pork belly capicola filet mignon frankfurter sausage ball tip bresaola. Porchetta fatback hamburger, bresaola cupim buffalo drumstick burgdoggen beef. Jerky meatball pig bresaola, shoulder alcatra leberkas pork flank tongue.
    
    Capicola tongue chuck flank andouille beef ribs hamburger picanha meatloaf fatback salami short ribs turkey. Kevin cupim swine bacon fatback pork belly shankle, pancetta porchetta ribeye. Boudin leberkas filet mignon pancetta capicola t-bone sausage hamburger sirloin. Spare ribs shank drumstick boudin jowl pork. Kielbasa pork loin jowl pork chop shank, ribeye bresaola.
    
    Strip steak sirloin bresaola meatloaf cow filet mignon boudin turducken. Spare ribs short loin frankfurter bresaola pig venison salami ham hock burgdoggen. Corned beef beef ribs fatback burgdoggen boudin shank t-bone strip steak short loin ball tip frankfurter kielbasa swine meatloaf bresaola. Shankle kevin chuck short ribs swine, pig spare ribs cow flank filet mignon pancetta jowl meatball. Tongue tail capicola burgdoggen beef ribs andouille biltong ground round turkey picanha. Capicola rump alcatra filet mignon. Meatloaf strip steak ground round sirloin.",
    draft: "Rough",
    percent: 90

})

Comment.create(
    wip: pirate,
    user: admin,
    content:"Bacon ipsum dolor amet jowl cupim tenderloin, frankfurter filet mignon meatball flank ribeye shankle. Bacon jowl short ribs sausage, pork belly tail andouille hamburger capicola rump pig shoulder. Picanha drumstick cupim meatloaf flank brisket tenderloin tri-tip capicola short loin leberkas swine tongue bacon burgdoggen. Swine chicken shank, fatback beef alcatra short ribs rump biltong."
)
Comment.create(
    short: always,
    user: admin,
    content:"Bacon ipsum dolor amet jowl cupim tenderloin, frankfurter filet mignon meatball flank ribeye shankle. Bacon jowl short ribs sausage, pork belly tail andouille hamburger capicola rump pig shoulder. Picanha drumstick cupim meatloaf flank brisket tenderloin tri-tip capicola short loin leberkas swine tongue bacon burgdoggen. Swine chicken shank, fatback beef alcatra short ribs rump biltong."
)
Comment.create(
    blog: first,
    user: admin,
    content:"Bacon ipsum dolor amet jowl cupim tenderloin, frankfurter filet mignon meatball flank ribeye shankle. Bacon jowl short ribs sausage, pork belly tail andouille hamburger capicola rump pig shoulder. Picanha drumstick cupim meatloaf flank brisket tenderloin tri-tip capicola short loin leberkas swine tongue bacon burgdoggen. Swine chicken shank, fatback beef alcatra short ribs rump biltong."
)
