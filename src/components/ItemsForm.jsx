import React, { memo, useCallback } from 'react';
import { Plus, Trash2, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ItemsForm = memo(({ formData, onItemChange, onAddItem, onRemoveItem }) => {
  const handleQuantityChange = useCallback((index, value) => {
    const quantity = parseFloat(value) || 0;
    onItemChange(index, 'quantity', quantity);
  }, [onItemChange]);

  const handleUnitPriceChange = useCallback((index, value) => {
    const unitPrice = parseFloat(value) || 0;
    onItemChange(index, 'unitPrice', unitPrice);
  }, [onItemChange]);

  const handleDescriptionChange = useCallback((index, value) => {
    onItemChange(index, 'description', value);
  }, [onItemChange]);

  const totalValue = formData.items.reduce((sum, item) => sum + (item.total || 0), 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          Serviços/Produtos
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {formData.items.map((item, index) => (
          <div key={index} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <Label>Item {index + 1}</Label>
              {formData.items.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => onRemoveItem(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
            
            <div>
              <Label htmlFor={`description-${index}`}>Descrição</Label>
              <Textarea
                id={`description-${index}`}
                value={item.description}
                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                placeholder="Descreva o serviço ou produto..."
                rows={2}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor={`quantity-${index}`}>Quantidade</Label>
                <Input
                  id={`quantity-${index}`}
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                  placeholder="1"
                  min="0"
                  step="0.01"
                />
              </div>
              <div>
                <Label htmlFor={`unitPrice-${index}`}>Valor Unitário (R$)</Label>
                <Input
                  id={`unitPrice-${index}`}
                  type="number"
                  value={item.unitPrice}
                  onChange={(e) => handleUnitPriceChange(index, e.target.value)}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                />
              </div>
              <div>
                <Label>Total (R$)</Label>
                <div className="h-10 flex items-center px-3 bg-gray-50 border rounded-md">
                  {(item.total || 0).toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={onAddItem}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Adicionar Item
          </Button>
          
          <div className="text-lg font-semibold">
            Total Geral: R$ {totalValue.toFixed(2)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

ItemsForm.displayName = 'ItemsForm';

export default ItemsForm;