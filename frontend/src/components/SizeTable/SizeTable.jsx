import React from 'react';
import './SizeTable.scss'; // Убедитесь, что SCSS файл импортирован

const SizeTable = () => {
    return (
        <div className="size-table-wrapper">
            <h2 className='title'>Как выбрать размер?</h2>
            <div className="table-container">
                <div className="size-table">
                    <h3>Вещь сядет идеально на параметры:</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>Размер</th>
                            <th>Бюст (см)</th>
                            <th>Талия (см)</th>
                            <th>Бедра (см)</th>
                            <th>Рост (см)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>XS</td>
                            <td>80–82</td>
                            <td>58–60</td>
                            <td>84–86</td>
                            <td>160–177</td>
                        </tr>
                        <tr>
                            <td>S</td>
                            <td>83–85</td>
                            <td>61–63</td>
                            <td>87–91</td>
                            <td>160–177</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>86–88</td>
                            <td>64–67</td>
                            <td>91–96</td>
                            <td>160–177</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>89–92</td>
                            <td>68–72</td>
                            <td>97–102</td>
                            <td>160–177</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="item-size-table">
                    <h3>Размеры вещи:</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>Размер</th>
                            <th>Длина (см)</th>
                            <th>Грудь (см)</th>
                            <th>Талия (см)</th>
                            <th>Бедра (см)</th>
                            <th>Длина рукава</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>XS</td>
                            <td>107</td>
                            <td>114</td>
                            <td>112</td>
                            <td>116</td>
                            <td>61</td>
                        </tr>
                        <tr>
                            <td>S</td>
                            <td>112</td>
                            <td>120</td>
                            <td>116</td>
                            <td>122</td>
                            <td>62</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>115</td>
                            <td>124</td>
                            <td>122</td>
                            <td>126</td>
                            <td>63</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>118</td>
                            <td>128</td>
                            <td>126</td>
                            <td>130</td>
                            <td>63</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default SizeTable;
