import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);

  addToCart(product: any) {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentItems.push({ product, quantity: 1 });
    }
    this.cartItems.next(currentItems);
  }

  removeFromCart(product: any) {
    const currentItems = this.cartItems.value;
    const updatedItems = currentItems.filter(item => item.product.id !== product.id);
    this.cartItems.next(updatedItems);
  }

  updateQuantity(product: any, quantity: number) {
    const currentItems = this.cartItems.value;
    const item = currentItems.find(item => item.product.id === product.id);
    if (item) {
      item.quantity = quantity;
      this.cartItems.next(currentItems);
    }
  }

  getCartItems(): Observable<any[]> {
    return this.cartItems.asObservable();
  }

  getTotalItemCount(): Observable<number> {
    return this.cartItems.pipe(
      map(items => items.reduce((total, item) => total + item.quantity, 0))
    );
    // return this.cartItems.pipe(
    //   map(items => items.length)
    // );
  }

  getTotalPrice(): Observable<number> {
    return this.cartItems.pipe(
      map(items => items.reduce((total, item) => total + item.product.price * item.quantity, 0))
    );
  }
}
