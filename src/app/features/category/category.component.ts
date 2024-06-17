import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../core/services/category.service';
import { Category } from '../../core/models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  formulario: FormGroup;
  categoryForm!: FormGroup;
  category: Category = new Category();

  constructor(private fb: FormBuilder,
    private categoryService: CategoryService) {
    this.formulario = this.fb.group({
      name: [this.category.name, Validators.required],
      description: [this.category.description]
    });

    this.categoryForm = this.fb.group({
      name: [this.category.name, Validators.required],
      description: [this.category.description]
    });
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadEditingState();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(
      categories => {
        this.categories = categories;
      },
      error => {
        console.error('Error al obtener las categorías', error);
      }
    );
  }

  loadEditingState() {
    this.categories.forEach(category => {
      const editingState = localStorage.getItem('editing_' + category.id);
      if (editingState) {
        category.editing = JSON.parse(editingState);
      }
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      const formValues = this.formulario.value;
      this.category.name = formValues.name;
      this.category.description = formValues.description;
      this.categoryService.createCategory(this.category).subscribe(
        response => {
          console.log('Categoría creada correctamente', response);
          this.loadCategories();
          this.formulario.reset();
        },
        error => {
          console.error('Error al crear la categoría', error);
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }

  toggleEditing(category: Category) {
    category.editing = !category.editing;
  
    localStorage.setItem('editing_' + category.id, JSON.stringify(category.editing));
  
    if (category.editing) {
      this.categoryForm.setValue({
        name: category.name,
        description: category.description
      });
    } else {
      this.categoryForm.reset();
    }
  }

  saveCategory(category: Category) {
    if (this.categoryForm.valid) {
      const formValues = this.categoryForm.value;
      category.name = formValues.name;
      category.description = formValues.description;
      this.categoryService.updateCategory(category.id, category).subscribe(
        response => {
          console.log('Categoría actualizada correctamente', response);
          this.loadCategories();
        },
        error => {
          console.error('Error al actualizar la categoría', error);
        }
      );
      this.toggleEditing(category);
    } else {
      console.log('Formulario no válido');
    }
  }

  deleteCategory(category: Category) {
    if (confirm('¿Estás seguro de que quieres eliminar esta categoría?')) {
      this.categoryService.deleteCategory(category.id).subscribe(
        response => {
          console.log('Categoría eliminada correctamente', response);
          this.loadCategories();
        },
        error => {
          console.error('Error al eliminar la categoría', error);
        }
      );
    }
  }
}
