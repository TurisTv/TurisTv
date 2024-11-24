document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const dueDateInput = document.getElementById('dueDateInput');
  const addTaskButton = document.getElementById('addTask');
  const taskList = document.getElementById('taskList');

  addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    if (taskText !== '' && dueDate !== '') {
      const timestamp = getCurrentTimestamp(); // Get current timestamp
      const taskItem = createTaskElement(taskText, timestamp, dueDate); // Create task element
      taskList.appendChild(taskItem); // Append task to list
      taskInput.value = '';
      dueDateInput.value = '';

      // Set a reminder for the due date
      const dueDateTime = new Date(dueDate);
      const now = new Date();
      const timeUntilDue = dueDateTime - now;
      if (timeUntilDue > 0) {
        setTimeout(function() {
          alert('Your task "' + taskText + '" is due now!');
        }, timeUntilDue);
      }

    } else {
      alert('Please enter a task and select a due date!');
    }
  });

  function getCurrentTimestamp() {
    const now = new Date();
    const date = now.toLocaleDateString('en-US');
    const time = now.toLocaleTimeString('en-US');
    return `${date} ${time}`;
  }

  function createTaskElement(taskText, timestamp, dueDate) {
    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    const timestampSpan = document.createElement('span');
    timestampSpan.textContent = timestamp;
    timestampSpan.classList.add('timestamp');
    const dueDateSpan = document.createElement('span');
    dueDateSpan.textContent = `Due Date: ${dueDate}`;
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-button');
    completeButton.addEventListener('click', function() {
      li.classList.add('completed');
      completeButton.disabled = true;
    });
    li.appendChild(taskSpan);
    li.appendChild(timestampSpan);
    li.appendChild(dueDateSpan);
    li.appendChild(completeButton);
    return li;
  }
});