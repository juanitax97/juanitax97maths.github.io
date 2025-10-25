document.addEventListener("DOMContentLoaded", () => {
  // Trouve tous les blocs :::correction ... ::: transformés en <div class="correction">
  document.querySelectorAll(".correction").forEach((block, i) => {
    const button = document.createElement("button");
    button.textContent = "Show solution";
    button.className = "correction-button";
    button.onclick = () => {
      const visible = block.style.display === "block";
      block.style.display = visible ? "none" : "block";
      button.textContent = visible ? "Show solution" : "Mask solution";
    };
    block.parentNode.insertBefore(button, block);
    block.style.display = "none";
  });
});
