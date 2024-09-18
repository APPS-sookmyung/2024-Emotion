// 저장된 감정 구슬 표시 및 삭제하기
window.onload = function() {
    const ballsContainer = document.getElementById('ballsContainer');
    const balls = JSON.parse(localStorage.getItem('balls')) || [];

    balls.forEach((ball, index) => {
        const ballDiv = document.createElement('div');
        ballDiv.className = 'ball';
        ballDiv.innerHTML = `
            <p>${ball.emotion}</p>
            <p>${ball.description}</p>
            <p>${new Date(ball.timestamp).toLocaleDateString()}</p>
            <button class="delete-btn" data-index="${index}">X</button>
        `;
        ballsContainer.appendChild(ballDiv);
    });

    // 이벤트 리스너를 추가하여 삭제 버튼 클릭 시 처리
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            removeBall(index);
        });
    });
};

// 구슬 삭제
function removeBall(index) {
    const balls = JSON.parse(localStorage.getItem('balls')) || [];
    balls.splice(index, 1); // 해당 인덱스의 구슬 삭제
    localStorage.setItem('balls', JSON.stringify(balls)); // 변경사항 저장
    window.location.reload(); // 페이지를 새로고침하여 변경사항 반영
}
