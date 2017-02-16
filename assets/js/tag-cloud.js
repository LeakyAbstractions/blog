---
layout: null
---
'use strict';

var tagCloud = document.getElementById('tag-cloud');

function significantWords(words){
  var filtered = [];
  var maxWords = 32;
  var length = words.length;
  if(length < maxWords){
    for(var i = 0; i < length; i++){
      filtered.push([words[i].tag, words[i].posts]);
    }
  }else{
    var maxWeight = Number.MIN_VALUE;
    for(var i = 0; i < length; i++){
      var weight = words[i].posts;
      if(weight > maxWeight) maxWeight = weight;
    }
    for(var w = maxWeight; filtered.length <= maxWords; w--){
      for(var i = 0; i < length; i++){
        var tag = words[i].tag;
        var weight = words[i].posts;
        if(weight == w){
          filtered.push([tag, weight]);
          if(filtered.length == maxWords) break;
        }
      }
    }
  }
  return(filtered);
}

tagCloud.config = {
  "list": significantWords(siteTags),
  "gridSize": 16,
  "weightFactor": 2,
  "color": '#7a8288',
  "rotateRatio": 0,
  "click": function(item){
    document.location = '#' + item[0];
  },
  "hover": function(item, dimension){
    tagCloud.style.cursor = (!dimension ? "default" : "pointer");
  }
};

WordCloud(tagCloud, tagCloud.config);
