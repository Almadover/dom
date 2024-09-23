// Изменение размера шрифта
document.querySelectorAll('.font-size').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        
        // Убираем класс font-size_active от всех элементов
        document.querySelectorAll('.font-size').forEach(el => {
            el.classList.remove('font-size_active');
        });

        // Добавляем класс font-size_active к нажатому элементу
        item.classList.add('font-size_active');

        // Получаем размер шрифта, выбранный пользователем
        let size = item.getAttribute('data-size');
        
        // Элемент книги
        let book = document.getElementById('book');

        // Удаляем все классы для изменения размера
        book.classList.remove('book_fs-small', 'book_fs-big');

        // В зависимости от выбранного размера добавляем соответствующий класс
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});

// Изменение цвета текста
document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        
        // Убираем класс color_active от всех элементов
        document.querySelectorAll('.color').forEach(el => {
            el.classList.remove('color_active');
        });

        // Добавляем класс color_active к нажатому элементу
        item.classList.add('color_active');

        // Получаем цвет текста, выбранный пользователем
        let textColor = item.getAttribute('data-text-color');
        
        // Элемент книги
        let book = document.getElementById('book');

        // Удаляем все классы для изменения цвета текста
        book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

        // Добавляем класс выбранного цвета текста
        if (textColor) {
            book.classList.add(`book_color-${textColor}`);
        }
    });
});

// Изменение цвета фона
document.querySelectorAll('.book__control_background .color').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        
        // Убираем класс color_active от всех элементов
        document.querySelectorAll('.book__control_background .color').forEach(el => {
            el.classList.remove('color_active');
        });

        // Добавляем класс color_active к нажатому элементу
        item.classList.add('color_active');

        // Получаем цвет фона, выбранный пользователем
        let bgColor = item.getAttribute('data-bg-color');
        
        // Элемент книги
        let book = document.getElementById('book');

        // Удаляем все классы для изменения фона
        book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

        // Добавляем класс выбранного цвета фона
        if (bgColor) {

            book.classList.add(`book_bg-${bgColor}`);
        }
    });
});
