import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems$ = this.cartService.getCartItems();
  totalPrice$ = this.cartService.getTotalPrice();

  constructor(private cartService: CartService) {}

  updateQuantity(item: any) {
    this.cartService.updateQuantity(item.product, item.quantity);
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
  }
}
