document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab_btn");
    const all_content = document.querySelectorAll(".dua");
    const line = document.querySelector(".line");
    
    // Set tab pertama sebagai aktif
    tabs[0].classList.add("active");
    all_content[0].classList.add("active");
    
    // Set posisi awal underline
    line.style.width = `${tabs[0].offsetWidth}px`;
    line.style.transform = `translateX(${tabs[0].offsetLeft}px)`;
    
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", (e) => {
        tabs.forEach(tab => tab.classList.remove("active"));
        all_content.forEach(content => content.classList.remove("active"));
        
        tab.classList.add("active");
        all_content[index].classList.add("active");
        
        line.style.width = `${tab.offsetWidth}px`;
        line.style.transform = `translateX(${tab.offsetLeft}px)`;
      });
    });
  });