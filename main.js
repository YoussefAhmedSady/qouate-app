var quoets=[
    {'qoutes':'Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend',
    'auther':"Albert Camus"       
},
{'qoutes':'In three words I can sum up everything I ve learned about life: it goes on.',
    'auther':"Robert Frost"       
},
{'qoutes':'“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
    'auther':"Maya Angelou"       
},
{'qoutes':'“To live is the rarest thing in the world. Most people exist, that is all.”',
    'auther':"Oscar Wilde"       
},
{'qoutes':'“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
    'auther':" Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches"       
},
{'qoutes':'“Without music, life would be a mistake.”',
    'auther':" Friedrich Nietzsche, Twilight of the Idols"       
},
{'qoutes':'“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they re right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”',
    'auther':"Marilyn Monroe"       
}
]
function getQuates(){
    var random=Math.floor(Math.random()*quoets.length);
    document.getElementById("quote").innerHTML=quoets[random].qoutes
    document.getElementById("quoteAuther").innerHTML=quoets[random].auther
    random+=1;
}