import React, { memo } from 'react';
import { Palette } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CustomizationForm = memo(({ formData, onInputChange }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Palette className="h-5 w-5" />
          Personalização
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="primaryColor">Cor Primária</Label>
            <div className="flex items-center gap-2">
              <Input
                id="primaryColor"
                type="color"
                value={formData.primaryColor}
                onChange={(e) => onInputChange('primaryColor', e.target.value)}
                className="w-16 h-10 p-1"
              />
              <Input
                value={formData.primaryColor}
                onChange={(e) => onInputChange('primaryColor', e.target.value)}
                placeholder="#3b82f6"
                className="flex-1"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="secondaryColor">Cor Secundária</Label>
            <div className="flex items-center gap-2">
              <Input
                id="secondaryColor"
                type="color"
                value={formData.secondaryColor}
                onChange={(e) => onInputChange('secondaryColor', e.target.value)}
                className="w-16 h-10 p-1"
              />
              <Input
                value={formData.secondaryColor}
                onChange={(e) => onInputChange('secondaryColor', e.target.value)}
                placeholder="#1e40af"
                className="flex-1"
              />
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-600">
          <p>As cores escolhidas serão aplicadas aos cabeçalhos e elementos de destaque da proposta.</p>
        </div>
      </CardContent>
    </Card>
  );
});

CustomizationForm.displayName = 'CustomizationForm';

export default CustomizationForm;